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

function dispatch(action){
    // action  就是一个普通对象 里边 规定的要修去修的项
    // {type:'UPDATE_TITLE',val:"更改后的值"}
    switch (action.type) {
        // 根据type 来确定 我们要改state中的哪个数据？
        case 'UPDATE_TITLE':
            state.title.text = action.val
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.val
            break;
        default:
            break;
    }

}

renderApp(state);// 把定义好的数据源传进去

setTimeout(() => {
    dispatch({type:"UPDATE_TITLE_COLOR",val:'#ccc'})
    renderApp(state);
}, 3000);

