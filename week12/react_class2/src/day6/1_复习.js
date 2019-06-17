const state = {
    title:{
        text:"标题",
        color:'red'
    },
    content:{
        text:'内容部分',
        color:"blue"
    }
}

function renderTitle(oldState,newState){
    if(oldState === newState)return;
    console.log('title')
    let til = document.getElementById('title');
    til.innerHTML = newState.text;
    til.style.color = newState.color
}
function renderContent(oldState,newState){
    if(oldState === newState)return;
    console.log('content')
    let content = document.getElementById('content');
    content.innerHTML = newState.text;
    content.style.color = newState.color
}

function renderApp(oldState,newState) {
    renderTitle(oldState.title,newState.title);
    renderContent(oldState.content,newState.content);
}

// 在这个位置执行了很多函数；

// 增加dispatch  想修改数据  人为规定 必须通过 dispatch修改 
// 接收一个action 作为参数； action 就是个普通对象{type:'xxx',val:'xxxx'}
function stateChanger(state,action){
    switch (action.type) {
        case "UPDATE_TITLE_TEXT":
            // state.title.text = action.val;
            // return state
            return {
                ...state,
                // title:{
                //     text:"标题",
                //     color:'red'
                // },
                // content:{
                //     text:'内容部分',
                //     color:"blue"
                // }
                title:{
                    ...state.title,
                    text:action.val
                }
            }
            break;
        case "UPDATE_TITLE_COLOR":
            // state.title.color = action.val;
            // return state
            return{
                ...state,
                title:{
                    ...state.title,
                    color:action.val
                }
            }
            break;
        default:
            // return state
            return{
                ...state
            }
            break;
    }
}

// 创造了一个createStore函数  返回值是一个对象；
// 接收 state（数据） 和 stateChanger（该数据的函数）
function createStore(state,stateChanger) {
    const getState = () => {return state};
    let listener = []; // 事件池；
    const subscribe = (f)=>{
        listener.push(f);
        // 返回了一个函数；该函数 可以把添加的事件移除掉
        return ()=>{
            // 把 f  从 litener中移除
            listener = listener.filter((item)=>{
                return f !== item;
            })
        }
    }
    let oldState = null;
    const dispatch = (action)=>{
        oldState = state;
        state = stateChanger(state,action);// 把修改后的state 返回 当前作用于的私有变量 state;
        listener.forEach(item=>{
            item&&item(oldState)
        })
    }
    return {
        getState,dispatch,subscribe
    }
}
const store = createStore(state,stateChanger);
// let rm1 = store.subscribe(()=>{console.log(1)})
// let rm2 = store.subscribe(()=>{console.log(2)})
// let rm3 = store.subscribe(()=>{console.log(3)});
let rm4 = store.subscribe((oldState)=>{
    // 只有当dispatch函数执行的时候； 才会 执行 该函数
    renderApp(oldState,store.getState())
})

renderApp({},store.getState())

setTimeout(() => {
    store.dispatch({type:'UPDATE_TITLE_TEXT',val:'更改后的title'});
}, 2000);
setTimeout(() => {
    store.dispatch({type:'UPDATE_TITLE_COLOR',val:'blue'});
}, 4000);


// dispatch({type:'UPDATE_TITLE_TEXT',val:'更改后的title'})
// renderApp(state);


// dispatch({type:'UPDATE_TITLE_COLOR',val:'#ccc'})
// renderApp(state);