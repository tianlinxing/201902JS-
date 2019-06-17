import React from 'react';

import PropTypes from 'prop-types'

class Input extends React.Component {
    static contextTypes = {
        color:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            comment:''
        }
    }
    change(e){
        this.setState({
            name:e.target.value
        })
    }
    changeCom(e){
        this.setState({
            comment:e.target.value
        })
    }
    submit(){
        let obj = {
            name:this.state.name,
            comment:this.state.comment,
            time:new Date().toLocaleString()
        }
        // 把obj 传给父组件
        // this.props.submit(obj)
        // window.myComment.qqq(obj)
        window.myComment.add([obj])

        this.setState({
            name:'',
            comment:''
        })
    }
    render() {
        let {name,comment} = this.state;
        let { color } = this.context;
        console.log(color)
        return <div className='inp_box' >
            <input 
                type="text" 
                placeholder='姓名' 
                value={name} 
                onChange={(e)=>{this.change(e)}}/><br/>
            <textarea 
                value={comment} 
                onChange={(e)=>{this.changeCom(e)}}></textarea><br/>
            <button onClick={()=>{this.submit()}}>提交</button>
        </div>
    }
}

export default Input