import React from 'react';
import './4.less'
class Model extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let {
            title='提示',
            isShow,
            onSure,
            onCancle,
            sureText='确定',
            cancleText='取消',
            className,
            children
        } = this.props;
        // 使用行内样式来决定盒子的显示和隐藏的效果；
        let obj = {display:isShow?'block':'none'}
        return <div className={className + ' model_box'} style={obj}>
            <div className='content_box'>
                <header>{title}</header>
                <main>
                {/* 放置插槽的内容 */}
                    {children}
                </main>
                <footer>
                    {/* 点击取消按钮  触发 对应的 onCancle函数*/}
                    <button onClick={onCancle}>{cancleText}</button>
                    <button onClick={onSure}>{sureText}</button>
                </footer>
            </div>
        </div>;
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow:false
        }
    }
    sure(){
        this.setState({
            isShow:false
        })
    }
    cancle(){
        this.setState({
            isShow:false
        })
    }
    render() {
        let {isShow} = this.state;
        return <div className='app'>
        {/* 
            isShow  控制显示隐藏
            onSure 是点击 确认按钮时 要执行的函数
            onCancle 是点击 取消按钮时 要执行的函数
            sureText 是确认按钮 上的 文案
            cancleText 是 取消按钮 上的 文案
            className 是给 弹框盒子添加的类名
        */}
            <Model
                title="请您购买？"
                isShow={isShow}
                onSure={this.sure.bind(this)}
                onCancle={()=>{this.cancle()}}
                sureText = '确认购买'
                cancleText = '放弃购买'
                className='my_box'
            >
                <h2>买不买</h2>
                <div>不买</div>
                <div>好的</div>
            </Model>

            {/* 点击按钮 让弹框显示； */}
            <button onClick={()=>{this.setState({isShow:true})}}> 显示弹框 </button>
        </div>;
    }
}


export default App