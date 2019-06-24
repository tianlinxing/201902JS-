import React from 'react';
import {Input,Button,message} from 'antd'
import {reg} from '../../api/user'
class Reg extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            psw:'',
            sure:''
        }
    }
    change(e,type){
        this.setState({
            [type]:e.target.value
        })
    }
    submit(){
        let {psw,sure} = this.state;
        if(psw !== sure){
            message.error('两次密码不一致');
            return
        }
        reg({
            username:this.state.name,
            password:psw
        }).then((data)=>{
            if(data.data.success){
                this.props.history.push('/home')
            }else{
                message.error('注册失败')
            }
        })
    }
    render() {
        let {name,psw,sure} = this.state;
        return <div className=''>
            <Input placeholder='姓名' value={name} onChange={(e)=>{this.change(e,'name')}}></Input>
            <Input.Password placeholder='密码'  value={psw} onChange={(e)=>{this.change(e,'psw')}}></Input.Password>
            <Input.Password placeholder='确认密码'  value={sure} onChange={(e)=>{this.change(e,'sure')}}></Input.Password>
            <Button onClick={()=>{this.submit()}}>注册</Button>
        </div>;
    }
}

export default Reg