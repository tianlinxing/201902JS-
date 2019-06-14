import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ary:[],
            todo:''
        }
    }
    change(e){
        this.setState({
            todo:e.target.value
        })
    }
    add(e){
        if(e.keyCode !== 13)return;// 不是回车键  啥也不干
        let ary = this.state.ary;
        ary.push(e.target.value);
        // this.state.todo = ''
        this.setState({
            ary:ary,
            todo:''
        })
    }
    del(item,n){
        //n 是要删除那一项的索引
        // this.state.ary.splice(n,1);// 改变原有数组
        // this.setState({
        //     ary:this.state.ary
        // })

        let ary = this.state.ary.filter(val=>val!==item);
        this.setState({
            ary:ary
        })
    }
    render() {
        // 给input 框的 value 绑定一个变量
        // 在react中 只要 input 的value 是个变量；就需要 绑定一个 onChange事件
        // 敲回车时  想数组中添加一项； 然后清空 input的内容
        // 最后让视图刷新
        let { ary,todo } = this.state;
        return <div className=''>
            <input type="text" 
            value={todo}
            onChange={(e)=>{this.change(e)}}   
            onKeyUp={(e)=>{this.add(e)}} 
            />
            <ul>
                {
                    ary.map((item,index)=>{
                        return <li key={index}>
                        {item}
                            <button onClick={()=>{this.del(item,index)}}>删除</button>
                        </li>
                    })
                }
            </ul>
        </div>;
    }
}

export default App