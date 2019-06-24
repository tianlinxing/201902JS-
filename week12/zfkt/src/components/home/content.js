import React from 'react';
import Item from './item'
import * as actions from '../../store/actions/actions';
import {connect} from 'react-redux'
class App extends React.Component {
    constructor() {
        super();
        
    }
    componentDidMount(){
        this.props.initList('all');// 请求数据
        this.getMore()
    }
    getMore(){
        let timer = null;
        window.onscroll = ()=>{
            let sh = document.documentElement.clientHeight || document.body.clientHeight;
            let st = document.documentElement.scrollTop || document.body.scrollTop;
            let bH = document.getElementById('topEle').offsetTop;
            if(sh+st >= bH - 100){
                // 距离底边还有100像素时 就去加载新的数据
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.props.initList(this.props.type)
                }, 500);
                
            }
        }

        // let flag = false; // 节流
        // window.onscroll = ()=>{
        //     if(flag)return
        //     flag = true;
        //     setTimeout(() => {
        //         flag = false
        //     }, 1000);

        //     // 要执行函数 1秒执行一次 
        // }
    }
    componentWillUnmount(){
        // 切出组件时 清除滚动事件
        window.onscroll = null;
    }
    render() {
        let {list} = this.props;
        return <div className='content_box'>
            <h2 className='title'>课程列表</h2>
            {
                list.map((item,index)=>{
                    return <Item key={index} data={item}></Item>
                })
            }
            <div id='topEle'></div>
        </div>;
    }
}

App = connect((state)=>{
    return {
        list:state.listAry.ary,
        type:state.listAry.type
    }
},actions)(App)
export default App