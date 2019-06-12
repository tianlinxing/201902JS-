import React from 'react';
import Arrow from './arrow'
import Focus from './focus'
import Banner from './banner'
import './index.less'
// 把 箭头  焦点   显示的内容 拆成了三个组件
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            index:0, // 控制显示张数的索引
            ary:[1,2,3] // 控制一共有几屏
        }
    }
    turn(n){
        // 更新 index
        // n 是 要去更新的步数
        this.setState({
            index:this.state.index + n
        })
    }
    render() {
        // 从state中把 index结构出来
        let {index,ary} = this.state;
        return <div className='container'>
            {/* 点击右箭头 让index累加1 ；  点击左键头  让index累减1 */}
            <Arrow 
                onRight={()=>{this.turn(1)}} 
                onLeft={()=>{this.turn(-1)}}>
            </Arrow>
            <Banner 
                index={index} 
                list={ary}
                initIndex={(n)=>{this.setState({index:n})}}
                ></Banner>
            <Focus></Focus>
        </div>;
    }
}

export default App