import React from 'react';

import createStore from './3_myredux'

function reducer(state={
    count:0
},action) {
    // 函数体
    switch (action.type) {
        case "ADD_COUNT":
            return {
                ...state,
                count:state.count + action.val
            }
        case "REMOVE_COUNT":
            return {
                ...state,
                count:state.count - action.val
            }
        default:
            return {
                ...state
            }
    }
}

let store = createStore(reducer);
// store 是个对像 对象中有 {getState,dispatch,subscribe}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: store.getState().count
        }
    }
    change(n){
        // 去修改 store中的 state 数据;通过 dispatch 执行 传递 action的方式
        console.log(n);
        if(n > 0){
            // 执行添加
            store.dispatch({type:"ADD_COUNT",val:n})
        }
        if(n < 0){
            // 执行减少
            store.dispatch({type:"REMOVE_COUNT",val:-n})
        }
        console.log(store.getState())
        // 每一次dipatch 执行完成  自动执行下边代码即可
        // redux 提供的了一个 subscribe函数; 我们可以利用该函数来实现
        // dispatch执行完成 自动更新；
        // 什么时候执行  subscribe函数？？ 该函数 执行一次 即可； 即 利用钩子函数实现
        // this.setState({
        //     count:store.getState().count
        // })
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                // 重新把store中新的state中的count 赋给本组件自己的 state中的count
                count:store.getState().count
            })
        })
    }
    render() {
        return <div className=''>
            <h2>当前数字是{this.state.count}</h2>
            <button onClick={()=>{this.change(1)}}>增加</button>
            <button onClick={()=>{this.change(-1)}}>减少</button>
        </div>;
    }
}

export default App