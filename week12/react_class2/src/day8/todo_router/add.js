import React from 'react';
class ADD extends React.Component {
    constructor() {
        super();
        this.state = {
            todo:''
        }
        
    }
    change(e){
        this.setState({
            todo:e.target.value
        })
    }
    submit(e){
        if(e.keyCode !==13)return;

        // 把数据放到localStorage
        let str = localStorage.getItem('todoAry') || "[]";
        let ary = JSON.parse(str);
        ary.push(this.state.todo);
        localStorage.setItem('todoAry',JSON.stringify(ary));

        this.setState({
            todo:''
        })
    }
    render() {
        return <div className=''>
            <input 
                value = {this.state.todo}
                onChange = {(e)=>{this.change(e)}}
                onKeyUp = {(e)=>{this.submit(e)}}
                type="text" 
                placeholder='要做的事情'/>
        </div>;
    }
}

export default ADD