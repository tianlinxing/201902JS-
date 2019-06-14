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
            ary:[
                {img:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/45488/37/2060/97922/5cfe2a95E0c15fcbf/ee11c9610e4c6515.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
                {img:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/33606/36/12405/360866/5cefb77bE2b5669f1/d31ffd152aa23272.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
                {img:'https://imgcps.jd.com/ling4/49506844185/6ZKT56u_5ZOB54mM5oOg6IGa/5Lq65rCU5aW96LSn57K-5b2p5ZGI546w/p-5c17126882acdd181dd53ce0/f88bd4c2/cr_1125x549_0_72/s1125x690/q70.jpg'},
                {img:'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/41188/2/5424/86584/5cef8426E664d9e0a/d2afe72bfa8659af.jpg!cr_1125x549_0_72!q70.jpg.dpg'},
            ] // 控制一共有几屏
        }
        this.timer = null;
    }
    turn(n){
        // 更新 index
        // n 是 要去更新的步数
        this.setState({
            index:this.state.index + n
        })
    }
    move(){
        // 实现自动轮播的函数
        this.timer = setInterval(()=>{
            this.turn(1)
        },2000)
    }
    componentDidMount(){
        // react的一个钩子函数 一个组件只触发一次；
        this.move();
    }
    render() {
        // 从state中把 index结构出来

        let {index,ary} = this.state;
        return <div 
            className='container' 
            onMouseEnter={()=>{clearInterval(this.timer)}}
            onMouseLeave={()=>{this.move()}}
            >
            {/* 
                划入 盒子 清除定时器； 让动画停止
                划出 盒子 重启定时器； 让动画进行
             */}

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
            
            {/* 焦点的移动  需要知道 index ; 焦点的个数需要知道 ary*/}
            <Focus 
                index={index}
                list = {ary}
                len = {ary.length}
                initIndex={(n)=>{this.setState({index:n})}}
            ></Focus>
        </div>;
    }
}

export default App