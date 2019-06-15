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
function renderTitle(state){
    // 给 title 元素设置内容 和 颜色
    let til = document.getElementById('title');
    til.innerHTML = state.title.text;
    til.style.color = state.title.color
}
function renderContent(state){
    // 给 content 元素设置内容 和 颜色
    let content = document.getElementById('content');
    content.innerHTML = state.content.text;
    content.style.color = state.content.color
}

function renderApp(state) {
    renderTitle(state);
    renderContent(state);
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
            state.title.text = action.val;
            return state
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.val;
            return state
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
    const dispatch = (action)=>{
        state = stateChanger(state,action)
    }
    return {
        getState,dispatch
    }
}

const store = createStore(state,stateChanger);
// store 就是一个普通的对象， 里边有两个函数 
// 一个 getState, 一个 dispatch
renderApp(store.getState());//getState 返回值就是 咱们state

let dispatch = store.dispatch;
setTimeout(() => {
    dispatch({type:"UPDATE_TITLE_COLOR",val:'#ccc'})
    renderApp(store.getState());
}, 3000);

