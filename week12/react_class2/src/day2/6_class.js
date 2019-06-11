import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// class Hello {
//     constructor(props){
//         this.name = 123;
//         this.props = props;
//     }
// }
// class Hello2 extends Hello{
//     constructor(){
//         super({a:12});// 把私有属性继承过来
//         this.age = 6;
//         console.log(this.props)
//     }
// }
// let h = new Hello2();
// console.log(h);

//React.Component react的内置类
console.log(React.Component)
class Hello2 extends React.Component{
    constructor(props){
        super(props);// this.props = props;
        console.log(this.props)
    }
    render(){
        // class 声明的组件 最终展示的内容是render函数的返回结果
        // render函数名是规定死的
        // 在render函数中  this.props 就是react规定的一个属性；
        let {className,age} = this.props;
        let str = age > 18  ? '成年人' : '未成年人'
        return <div className={className}>
            hello world {str}
            年龄是 {age}
        </div>
    }
}
ReactDOM.render(<div>
    <Hello2 className='box' age='12'/>
    <Hello2 className='box' age='123'/>
    <Hello2 className='box' age='13'/>
    <Hello2 className='box' age='23'/>
</div>,document.getElementById('root'))