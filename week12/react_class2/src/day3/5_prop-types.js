import React from 'react';
import qqq from 'prop-types';
//props 它用来规范传递的数据类型， 以及给传递的数据 附默认值

class Hello extends React.Component{
    static propTypes = {
        // propTypes 是 react规定的 属性
        // 该属性 是  react 用来规定 传进来参数的数据类型的
        name:qqq.string, // name 必须是 字符串
        age:qqq.number, // age 必须是 数字
        obj:qqq.object // obj 必须是 对象
    }
    static defaultProps = {
        // defaultProps 是 react规定的属性  用来 赋默认值的
        name:'hello world'
    }
    render(){
        return <div>
            {this.props.name}
        </div>
    }
}

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <Hello  age={15} obj={{a:12}}></Hello>
        </div>;
    }
}

export default App