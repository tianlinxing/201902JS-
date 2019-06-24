import React from 'react';
import { Input,Button,message } from 'antd';
import { login } from '../../api/user'
import '../../less/user.less'
class User extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            psw:''
        }
    }
    changeName(e){
        let str = e.target.value;
        // str 中 非数字和字母的都替换掉
        
        // str = str.replace(/\W+/g,'')
        // console.log(str)
        this.setState({
            name:str
        })
    }
    changePsw(e){
        this.setState({
            psw:e.target.value
        })
    }
    submit(){
        if(/\W/.test(this.state.name)){
            // 说明 name 不合法
            message.error('你的用户名不合法');
            this.setState({
                name:''
            });
            return;
        }
        login({
            username:this.state.name,
            password:this.state.psw
        }).then((data)=>{
            if(data.data.error){
                message.error('登陆失败')
            }
        })
    }
    render() {
        let {name,psw} = this.state;
        return <div className='inp_box'>
            <Input 
                className='inp'
                placeholder="姓名"
                value = {name}
                onChange = {(e)=>{this.changeName(e)}}
                ></Input><br/>
            <Input.Password 
                className='inp'
                placeholder="密码"
                value = {psw}
                onChange = {(e)=>{this.changePsw(e)}}
                ></Input.Password><br/>
            <Button type="primary" onClick={(e)=>{this.submit(e)}}>登录</Button><br/>
            <Button type="link" onClick={()=>{
                this.props.history.push('/reg')
            }}>前往注册</Button>
        </div>;
    }
}

export default User