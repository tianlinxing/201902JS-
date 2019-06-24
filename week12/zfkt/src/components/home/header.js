import React from 'react';
import {Icon} from 'antd'
import logo from '../../image/logo.png'
import {connect} from 'react-redux'
import {initList} from '../../store/actions/actions'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showClose:false
        }
    }
    change(){
        // 为了修改 showClose
        this.setState({
            showClose: !this.state.showClose
        })
    }
    changeType(e){
        // dataset属性 是获取 在元素行内设置的 data-xxx 的这些属性和他的值
        // console.log(e.target.dataset)
        // 点击的时候 根据 类型  请求不通的数据
        let str = e.target.dataset.qqq;
        this.props.dispatch(initList(str,1));
        // 让 ul 消失
        this.setState({
            showClose:false
        })
    }
    render() {
        let {showClose} = this.state;// 这个属性是用来控制 显示的icon
        return <div className='header_box'>
            <div className='logo_box'>
                {/* <img src={logo} alt=""/> */}
            </div>
            <div className='more_box' onClick={()=>{this.change()}}>
                {
                    showClose ? 
                    <Icon type="close" /> :
                    <Icon type="align-right" />
                }
            </div>
            {
                showClose ? 
                <ul className='tab_list' onClick={(e)=>{this.changeType(e)}}>
                    <li data-qqq='all'>全部课程</li>
                    <li data-qqq='vue'>VUE课程</li>
                    <li data-qqq='react'>REACT课程</li>
                </ul>
                :
                null
            }
        </div>;
    }
}
Header = connect((state)=>{
    return{

    }
},(dispatch)=>{
    return{
        dispatch
    }
})(Header)
export default Header