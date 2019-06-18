import React,{Component} from 'react';
import myPropTypes from 'prop-types'
import {connect} from './react_redux2'

import {createStore} from '../1_复习'

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
        console.log(this.props)
    }
    render(){
        return <div>
            <h2 style={{color:this.props.color123}}>这是头部</h2>
        </div>
    }
}
Header = connect((state)=>{
    return{
        color123:state.color
    }
    // 我们就可以在Header组件中使用this.props.color
},()=>{})(Header)
class Button extends Component{
    change(str){
        // 点击按钮执行的函数
        // 我们要根据 str 来设置 store中的state;
        // debugger
        this.props.qqq({type:'UPDATE_COLOR',val:str})
        
    }
    render(){
        // 要实现点击变色； 需要给 两个分别绑定对应的事件
        return <div>
            <button onClick={()=>{this.change('blue')}} style={{color:this.props.color123}}>变蓝</button>
            <button onClick={()=>{this.change('red')}} style={{color:this.props.color123}}>变红</button>
        </div>
    }
}
Button = connect((state)=>{
    return{
        color123:state.color
    }
    // 我们就可以在Header组件中使用this.props.color
},(dispatch)=>{
    return{
        qqq:dispatch
    }
})(Button)
class Main extends Component{
    render(){
        return <div>
            <h3 style={{color:this.props.color123}}>这是内容部分</h3>
            <Button/>
        </div>
    }
}
Main = connect((state)=>{
    return{
        color123:state.color
    }
    // 我们就可以在Header组件中使用this.props.color
},()=>{})(Main)

console.log(Component)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a:100
        }
    }
    static childContextTypes = {
        store:myPropTypes.object
    }
    getChildContext (){
        return{
            store:store
        }
    }
    render() {
        return <div className=''>
            <Header className='www'/>
            <Main/>
        </div>;
    }
}

export default App
