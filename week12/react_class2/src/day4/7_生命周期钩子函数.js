import React from 'react';

class Son extends React.Component{
    componentWillReceiveProps(newProps){
        console.log(newProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps)
        return false
    }
    render(){
        return <div>
            <h2>子组件</h2>
        </div>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        // constructor 是react的第一个钩子函数 
        this.state = {
            name:123
        }
        console.log(1)
    }
    // static propTypes = {}
    // static defaultProps = {}
    // static getDerivedStateFromProps(props, state) {
    //     // props 是从父组件接收的数据
    //     // state是当前组件 state
    //     // 返回值 会合并到 当前组件的state中；
    //     // 不能跟 componentWillMount 同时使用
    //     console.log(props)
    //     console.log(state)
    //     return {
    //         age:18
    //     }
    // }
    componentWillMount(){
        // DOM挂载 之前触发 
        // 在这个函数里边书写 setState 不会触发视图更新
        // 
        // this.state.name = 666;
        this.setState({
            name:666
        })
        console.log(2)
    }
    render() {
        // 第三个执行的钩子函数 
        console.log(3)
        return <div className=''>
            {this.state.name}
            <Son q='12'/>
        </div>;
    }
    componentDidMount(){
        //组件挂在完成之后触发； DOM页面渲染完成之后触发；
        console.log(4);
        // this.state.name = '珠峰'
        this.setState({
            name:"珠峰"
        })
    }
    // constructor  componentWillMount  componentDidMount 初次挂载阶段触发；一个组件只触发一次
    componentWillReceiveProps(newProps){
        // 初始化时 不会触发 ；
        // 只有当父组件更新的时候  或者 传进来的 props更新时 才会触发
        console.log(newProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        //当 props 或者 state 更新的时候 会触发 该函数执行
        // 该函数 若返回true  则 DOM就会更新；
        ///      若返回false 则  DOM不会更新
        // 该函数可以用来提升 react组件的渲染性能；
        console.log(1,nextProps)
        console.log(1,nextState)
        return true
    }
    componentWillUpdate(){
        // DOM 更新之前触发；别写setState  类似于vue的 beforeUpdate
    }
    componentDidUpdate(){
        // DOM 更新之后  类似vue 的 updated
    }
    componentWillUnmount(){
        // 组件卸载之前 类似于 vue 的 beforeDestroy
        // 可以用来清除组件内部的定时器；
    }
}
// componentDidMount      shouldComponentUpdate      常用
//  componentDidUpdate    componentWillUnmount        不太常用

export default App