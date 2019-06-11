import React,{Component} from 'react'
import ReactDOM from 'react-dom'

console.log(React.Component)
// 组件名大写
// Component 是 React的一个内置类
class Hello extends React.Component{
    render(){
        // Hello 组件对应展示的内容 就是 render函数的 返回值
        return <div>
            hello world
        </div>
    }
}
class Hello2 extends Component{
    // constructor(props){
    //     super(props) // 这个传不传 对于render中的代码没有影响
    //     // 相当于父类的 constructor // 会继承私有属性
    //     // console.log(props)
    //     // this.props = props;
    //     console.log(this.props)
    // }
    render(){
        // Hello 组件对应展示的内容 就是 render函数的 返回值
        console.log(666)
        return <div className={this.props.className}>
            hello world2
        </div>
    }
}
ReactDOM.render(<Hello2 className='box'/>,document.getElementById('root'))



