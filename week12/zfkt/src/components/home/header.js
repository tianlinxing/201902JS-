import React from 'react';
import {Icon} from 'antd'
import logo from '../../image/logo.png'
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
                <ul className='tab_list'>
                    <li>全部课程</li>
                    <li>VUE课程</li>
                    <li>REACT课程</li>
                </ul>
                :
                null
            }
        </div>;
    }
}

export default Header