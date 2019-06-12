import React from 'react';
import qqq from 'prop-types'
class Son extends React.Component {
    static propTypes = {
        w:qqq.string
    }
    render() {
        let {onMyclick} = this.props;
        return <div className=''>
            <h2>{this.props.til}</h2>
            {/* 点击 每次 累加 2 */}
            {/* 这个bind已经不能改变this指向了 因为 omMyclick是被bind处理过的函数 */}
            <button onClick={onMyclick.bind(null,2)}>按钮</button>

            {/* 使用箭头函数 直接传参即可 */}
            <button onClick={()=>{onMyclick()}}>按钮2</button>
        </div>;
    }
}
class Son2 extends React.PureComponent{
    render(){
        console.log(this.props)
        return <div>
            {this.props.children}
            <button>按钮666</button>
            {
                this.props.children.map(item=>item)
            }
        </div>
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }
    fn(n=1,e){
        // 让子组件 去决定 每次点击 累加多少
        this.setState({
            count:this.state.count + n
        })
    }
    render() {
        return <div className=''>
            当前数字是{this.state.count}
            <Son til='父组件定义的文案' onMyclick={this.fn.bind(this)}/>
            {/*                                   订阅 
                赋予 onMyclick 是一个 bind处理过的函数；
                子组件触发函数
            */}
            <Son2>
            {/* 在 react 中  我们 通过  this.props.children 来获取对应的组件包含的结构 */}
                你好helloworld
                <h2 className='haha'>哈哈</h2>
                <div>嘿嘿</div>
            </Son2>
        </div>;
    }
}

export default App