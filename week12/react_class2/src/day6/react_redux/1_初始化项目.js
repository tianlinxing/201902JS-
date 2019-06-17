import React,{Component} from 'react';
import myPropTypes from 'prop-types'

class Header extends Component{
    static contextTypes = {
        a:myPropTypes.number
    }
    componentDidMount(){
        console.log(this.context)
    }
    render(){
        return <div>
            <h2>这是头部</h2>
        </div>
    }
}
class Button extends Component{
    render(){
        return <div>
            <button>变蓝</button>
            <button>变红</button>
        </div>
    }
}
class Main extends Component{
    render(){
        return <div>
            <h3>这是内容部分</h3>
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
    // static propTypes = {
    //     name123:qqq.number
    // } //设置属性的 类型
    // static defaultProps = {}// 设置属性的 默认值
    static childContextTypes = {
        // 规定一下 context中 a  属性 的类型
        a:myPropTypes.number
    }
    getChildContext (){
        // 设置 context中 a属性的 值
        return{
            a:this.state.a
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

// context 属性 是每个react组件都有的一个属性
// 该属性对应的是个对象 若给父组件的该属性设置了值
// 那么所有的后代组件都可以通过context属性访问
// 子组件可以访问父组件的该属性； 但是父组件访问不到子组件的该属性
// 他是个单向的（从上向下传递的）

// 使用的时候限制有点多，
// 在父组件这里设置的时候， 需要两个属性
// childContextTypes  用来设置对应属性的 数据类型 ； 是一个静态属性
// getChildContext    用来设置对应属性的 值；是一个普通函数
// 再子组件使用的时候  我们需要一个属性  contextTypes
// contextTypes 用来规定 引入的context中的属性的 数据类型