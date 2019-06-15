// 创造一个对象 用来存储一些数据
const state = {
    title:{
        color:'red',
        text:'这是个标题'
    },
    content:{
        color:'blue',
        text:"这是内容部分"
    }
}

// 创造两个 render 函数
function renderTitle(oldState,newState){
    // 为了节省性能，加了一个 新旧比较的判断
    debugger
    if(oldState===newState)return;
    // 给 title 元素设置内容 和 颜色
    let til = document.getElementById('title');
    til.innerHTML = newState.text;
    til.style.color = newState.color
}
function renderContent(oldState,newState){
    if(oldState===newState)return;
    // 给 content 元素设置内容 和 颜色
    console.log('content')
    let content = document.getElementById('content');
    content.innerHTML = newState.text;
    content.style.color = newState.color
}

function renderApp(oldState,newState) {
    // 出现 oldState,newState 是为了处理重复渲染的问题
    renderTitle(oldState.title,newState.title);
    renderContent(oldState.content,newState.content);
}

//假如 render之前执行了很多函数；然后 render出来的效果不是想要的
// 为了避免数据被随意修改； 我们规定修改state中的数据 只能通过
// 自己规定的某个函数去修改； 提高修改数据的成本；
// 我们就给 这个函数  起个名字 叫 dispatch

function stateChanger(state,action){
    // action  就是一个普通对象 里边 规定的要修去修的项
    // {type:'UPDATE_TITLE',val:"更改后的值"}
    switch (action.type) {
        // 根据type 来确定 我们要改state中的哪个数据？
        case 'UPDATE_TITLE':
            // state.title.text = action.val;
            // return state
            return {
                ...state,// 只是修改了 title这个属性 content属性没动
                // title:{
                //     color:'red',
                //     text:'这是个标题'
                // },
                // content:{
                //     color:'blue',
                //     text:"这是内容部分"
                // }
                title:{
                    ...state.title,
                    text:action.val,
                }
            }
            break;
        case 'UPDATE_TITLE_COLOR':
            // state.title.color = action.val;
            // return state
            return {
                ...state,
                title:{
                    ...state.title,
                    color:action.val
                }
            }
            break;
        default:
            return state
            break;
    }

}
// 创建一个 createStore函数
// 该函数 接收state 和 stateChanger
// state就是我们数据源 
// stateChanger 是个函数  用来修改 state
// 返回值 是个对象 对象中 有两个函数 
// 一个是 getState  用来获取state;
// 另一个是 dispatch  用来修改数据
function createStore(state,stateChanger) {
    const getState = ()=>{return state}
    let listener = [];// 是个事件池 用来存储事件的
    const subscribe = (f)=>{// 订阅使用的函数
        listener.push(f);
        // 返回值是个函数  函数执行  就会把 f 从事件池中移除
        return ()=>{
            listener = listener.filter((item)=>{
                return item !== f
            })
        }
    }
    let oldState = null;//oldState 是用来存储 改变之前的state;
    const dispatch = (action)=>{
        oldState = state; // 把更新之前的state 再次存储到 oldState中；
        state = stateChanger(state,action) // 更新了 state
        listener.forEach(item=>{
            item&&item(oldState)
        })
    }
    return {
        getState,dispatch,subscribe
    }
    // subscribe 是个函数 他可以接受一些事件 然后放到事件池中
}

const store = createStore(state,stateChanger);
// store 就是一个普通的对象， 里边有两个函数 
// 一个 getState, 一个 dispatch
renderApp({},store.getState());//getState 返回值就是 咱们state
store.subscribe((oldState)=>{renderApp(oldState,store.getState())})

let dispatch = store.dispatch;
setTimeout(() => {
    dispatch({type:"UPDATE_TITLE_COLOR",val:'#ccc'})
    // renderApp(store.getState()); //有了subscribe 这行就不需要执行了
}, 3000);
setTimeout(() => {
    dispatch({type:'UPDATE_TITLE',val:'这是更改之后的标题'})
    console.log(store.getState())
}, 6000);

