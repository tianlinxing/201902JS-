import React,{Component} from 'react';
import myPropTypes from 'prop-types'

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
    constructor(props,context){
        super(props,context);
        // this.state = {
        //     color:this.context.store.getState().color
        // }
        this.state = {
            color:''
        }
    }
    static contextTypes = {
        a:myPropTypes.number,
        store:myPropTypes.object
    }
    componentWillMount(){
        const {store} = this.context;
        this.setState({
            color:store.getState().color
        })
        store.subscribe(()=>{ // 解决视图更新的问题
            this.setState({
                color:store.getState().color
            })
        })
    }
    componentDidMount(){
        console.log(this.context)
        console.log(this.state)
    }
    render(){
        return <div>
            <h2 style={{color:this.state.color}}>这是头部</h2>
        </div>
    }
}
class Button extends Component{
    constructor(){
        super();
        this.state = {
            color:''
        }
    }
    static contextTypes = {
        store:myPropTypes.object
    }
    componentWillMount(){
        const {store} = this.context;
        this.setState({
            color:store.getState().color
        })
        store.subscribe(()=>{
            this.setState({
                color:store.getState().color
            })
        })
    }
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
            <button onClick={()=>{this.change('blue')}} style={{color:this.state.color}}>变蓝</button>
            <button onClick={()=>{this.change('red')}} style={{color:this.state.color}}>变红</button>
        </div>
    }
}
class Main extends Component{
    constructor(){
        super()
        this.state = {
            color:''
        }
    }
    static contextTypes = {
        store:myPropTypes.object
    }
    componentWillMount(){
        const {store} = this.context;
        this.setState({
            color:store.getState().color
        })
        store.subscribe(()=>{
            this.setState({
                color:store.getState().color
            })
        })
    }
    render(){
        return <div>
            <h3 style={{color:this.state.color}}>这是内容部分</h3>
            <Button/>
        </div>
    }
}

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
