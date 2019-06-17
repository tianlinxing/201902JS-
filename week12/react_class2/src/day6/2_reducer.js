
// 创造两个 render 函数
function renderTitle(oldState,newState){
    // 为了节省性能，加了一个 新旧比较的判断
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

function reducer(state,action){
    if(!state){
        // 进来 先判断有没有 state；若没有 我们就给他一个初始值
        // 这么以处理 state 就是完全是一个私有的变量了；
        state = {
            title:{
                text:'标题',
                color:'red'
            },
            content:{
                text:'内容部分',
                color:'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE':
            return {
                ...state,
                title:{
                    ...state.title,
                    text:action.val,
                }
            }
            break;
        case 'UPDATE_TITLE_COLOR':
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
function createStore(stateChanger) {
    let state = null;
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
    dispatch({});
    // 执行dispatch 这时 给 stateChanger传的是 是 (null,{})
    // state是null  则 对应的 stateChanger会给 私有的 state 附一个初始值
    // action是{}   则 会走 switch的default选项 返回了一个 有了初始值的 state
    // 这时 createStore中的 state 就有了 一个 初始值
    return {
        getState,dispatch,subscribe
    }
    // subscribe 是个函数 他可以接受一些事件 然后放到事件池中
}

const store = createStore(reducer);
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

