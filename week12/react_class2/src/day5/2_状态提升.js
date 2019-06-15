/**
 * 状态提升： 把子组件的state提升到 父组件及以上；
 *              然后子组件通过props接收 
 * 发布订阅：发布订阅时JS的一种设计模式，涉及到订阅 我们可以理解成向某个事件池
 *          添加事件；事件池 在JS中一般是一个数组 或者 对象；发布 我们可以理解成
 *          在某个阶段 需要我们把事件池中的某个函数执行；这就是我们要做的发布的一个动作
 *          也就是说 发布订阅 其实就是 在某个阶段订阅一个事件， 当需要执行的时候 再去发布这个事件
 *                  也就是执行对应的函数；
*/
import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>

        </div>;
    }
}

export default App