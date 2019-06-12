import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// 书写三个组件  一个  Button 只负责提供按钮
//              一个  Count  只负责显示数字
//              一个   App   使用以上两个组件

class Button extends Component{
    // constructor(props){
    //     super(props)
    // }
    componentDidMount(){
        console.log(this)
    }
    render(){
        let {text,onClick} = this.props;
        console.log(onClick)// 获取到的 函数体
        return <div>
            {/* 按钮的文案 由 父组件来决定 */}
            <button onClick={()=>{onClick(1,2,3)}}>{text||'按钮'}</button>
        </div>
    }
}
class Count extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        let {num} = this.props;
        return <div>
            <h2>当前数字是{num}</h2>
        </div>
    }
}
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    add=(...ary)=>{
        console.log(ary)
        this.setState({
            num:++this.state.num
        })
    }
    remove(){
        this.setState({
            num:this.state.num-1
        })
    }
    // 父传子   自定义属性  +  props
    // 子传父   自定义属性  +  props 自定义属性的值是一个函数；函数在子组件触发； 
    render(){
        return <div>
            APP 组件 
            <Button text="增加" onClick={this.add}></Button>
            <Button text="减少" onClick={()=>{this.remove()}}></Button>
            <Count num={this.state.num}/>
            <button onClick={this.add.bind(null,1,2,3)}>666</button>
        </div>
    }
}




ReactDOM.render(<App/>,document.getElementById('root'))