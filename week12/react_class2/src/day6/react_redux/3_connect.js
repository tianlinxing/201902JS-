import React,{Component} from 'react';
import myPropTypes from 'prop-types'

// 引入 connect
import {connect} from './my_react_redux'

import createStore from '../3_myredux'

function reducer(state={color:'red'},action){
    switch (action.type) {
        case "UPDATE_COLOR":
            return {
                ...state,
                color:action.val
            }
    
        default:
            return{
                ...state
            }
    }
}

let store = createStore(reducer);
// 把 store 放到根组件的  context 中

class Header extends Component{
    
    componentDidMount(){
        console.log(this.context)
        console.log(this.state)
    }
    render(){
        return <div>
            <h2 style={{color:this.props.color}}>这是头部</h2>
        </div>
    }
}

Header = connect(Header) // 使用connect处理以下Header

class Button extends Component{
    
    change(str){
        // 点击按钮执行的函数
        // 我们要根据 str 来设置 store中的state;
        const {store} = this.context;
        store.dispatch({type:'UPDATE_COLOR',val:str})
        console.log(store.getState())
    }
    render(){
        // 要实现点击变色； 需要给 两个分别绑定对应的事件
        return <div>
            <button onClick={()=>{this.change('blue')}} style={{color:this.props.color}}>变蓝</button>
            <button onClick={()=>{this.change('red')}} style={{color:this.props.color}}>变红</button>
        </div>
    }
}
Button = connect(Button)
class Main extends Component{
    
    render(){
        return <div>
            <h3 style={{color:this.props.color}}>这是内容部分</h3>
            <Button/>
        </div>
    }
}
Main = connect(Main) 

console.log(Component)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a:100
        }
    }
    static childContextTypes = {
        a:myPropTypes.number,
        store:myPropTypes.object
    }
    getChildContext (){
        return{
            a:this.state.a,
            store:store
        }
    }
    render() {
        return <div className=''>
            <Header/>
            <Main/>
        </div>;
    }
}

export default App
