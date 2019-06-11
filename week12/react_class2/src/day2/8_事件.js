import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            count :0
        }
    }
    add(){
        // 保证this 的指向 是当前实例  1、使用箭头函数  2、使用 bind
        // setState 函数内部赋值  是个异步操作；
        // setState 可以触发视图的更新；render函数执行
        let obj = {
            count:++this.state.count // 
            // 先给 count 赋值 this.state.count ;后进行的 this.state.count累加；setState异步，会导致重新给 count赋值为 累加之前的数
            // count:100
        }
        this.setState(obj);
        console.log(arguments);
    }
    render(){
        let {count} = this.state;
        // 在render函数中 别写  setState;写了 就是死循环
        // this.setState({
        //     count:Math.random()
        // })
        return (<div>
            {/* <button onClick={()=>{count++}}>按钮</button> */}
            {/* <button onClick={()=>{this.setState({count:++count})}}>按钮</button> */}
            <button onClick={(e)=>{this.add(e,1,2,3)}}>按钮</button>
            <button onDoubleClick={this.add.bind(this,1,2,3)}>按钮2</button>
            {/* 会默认 把事件对象传给函数体; 使用bind时  传递的事件对象是在是实参集合的最后边 */}
            <h2>{count}</h2>
        </div>)
    }
}

ReactDOM.render(<Button></Button>,document.getElementById('root'))