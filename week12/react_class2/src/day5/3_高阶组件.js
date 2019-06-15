/**
 * 高阶组件本质是一个函数；接受一个 组件作为参数 ；返回值是一个新组件
 */
import React from 'react';
const connect = (Per)=>{
    class Temp extends React.Component{
        render(){
            return  <Per name123='珠峰'></Per>
            
        }
    }
    return Temp
}

class Son extends React.Component{
    render(){
        return <div>
            name123是：{this.props.name123}
        </div>
    }
}
Son = connect(Son)

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <Son/>
        </div>;
    }
}

export default App