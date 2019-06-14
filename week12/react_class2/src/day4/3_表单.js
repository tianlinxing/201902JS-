import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'珠峰',
            password:123567
        }
    }
    fn(){
        console.log(this.nameEl.value)
        console.log(this.passWEl.value)
    }
    fn2(e){
        console.log(e.keyCode);
    }
    nameFn(e){
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }
    passFn(e){
        console.log(e.target.value);
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return <div className=''>
            <input ref={(el)=>{this.nameEl=el}} type="text" placeholder='请输入用户名'/>
            <input ref={(el)=>{this.passWEl=el}} type="password" placeholder='请输入密码'/>
            <button onClick={this.fn.bind(this)}>登录</button>

            <input type="text" onKeyUp={(e)=>{this.fn2(e)}}/>
            {/*                          e 是形参 代表的是事件对象 react自动传递的 */}


            <div>----------------------------------------</div>

            <input 
                type="text" 
                value={this.state.name} 
                onChange={(e)=>{this.nameFn(e)}}
                placeholder='姓名2'/>
            <input 
                type="password" 
                value={this.state.password} 
                onChange={(e)=>{this.passFn(e)}}
                placeholder='密码2'/>
            <button onClick={()=>{this.submit2()}}>登录2</button>
        </div>;
    }
}

export default App