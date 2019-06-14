import React from 'react';
import jsonp from 'jsonp'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            ary:[]
        }
    }
    change(e){
        this.setState({
            name:e.target.value
        },()=>{
            // 数据更新之后 才会执行 该函数
            this.getData(this.state.name)
        })
        // this.getData(e.target.value);
        // this.getData(this.state.name)
    }
    getData(wd){
        //获取数据
        // wd 是当前用户输入的关键字
        jsonp('https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd='+wd+'&req=2&pwd=qq',{param:'cb'},(err,data)=>{
            console.log(data)
            this.setState({
                ary:data.g||[] // 把后台给的数组 赋给当前组件的 ary
            })
        })
    }
    render() {
        let {name,ary} = this.state;
        return <div className=''>
            <input type="text" value={name} onChange={(e)=>{this.change(e)}}/>
            <ul>
                {
                    ary.map((item,index)=>{
                        return <li key={index}>{item.q}</li>
                    })
                }
            </ul>
        </div>;
    }
}

export default App