import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// react组件的数据来源 有两个 一个是 props(属性)  state(状态)
// 属性是传递进来的
// 状态是私有的  自定义的

class Hello extends Component{
    constructor(props){
        super(props);// props中的属性只能用 不能改
        // 增加了一个私有属性 是 state 值是一个对象
        // props.id = 123 报错

        // state 理解成 vue的data   自己的 想怎么改怎么改
        // props 理解成 vue props   只能用不能改

        // state 只存在去 class 声明的组件 ； 
        // function 声明的组件 没有state; 无状态组件
        this.state = {
            //
            name:'123'
        }
    }
    render(){
        this.state.name = '中国';
        return <div>
            状态是  {this.state.name}
        </div>
    }
}

ReactDOM.render(<div>
    <Hello id='456'></Hello>
</div>,document.getElementById('root'))