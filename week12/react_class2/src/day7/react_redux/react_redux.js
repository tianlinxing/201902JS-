import React,{Component} from 'react'
import myPropTypes from 'prop-types'
function connect(mapStateToProps){
    return function(MyComponent){
        class Temp extends Component{
            constructor(){
                super();
                this.state = {}
            }
            static contextTypes = {
                store:myPropTypes.object
            }
            componentWillMount(){
                const {store} = this.context;
                // this.setState({
                //     color:store.getState().color
                // })

                let state = store.getState();
                this.setState(mapStateToProps(state))
                // 高阶组件 通过 mapStateToProps的返回值来决定给该组件设置什么私有属性
                // 这么做的好处是 使用的connect组件的人 可以自己决定使用store中的哪些数据
                this.remove = store.subscribe(()=>{
                    this.setState(mapStateToProps(state))
                })
                // connect 每使用一次 就会向事件池中添加一个事件
                // 若不移除 回到 事件池越来越大
                // 所以我们在 组件卸载时 把 事件移除掉
            }
            componentWillUnmount(){
                this.remove();
            }
            render(){
                return <MyComponent {...this.state}></MyComponent>
            }
        }
        return Temp
    }
}
// function connect(MyComponent){
//     class Temp extends Component{
//         constructor(){
//             super();
//             this.state = {
//                 color:''
//             }
//         }
//         static contextTypes = {
//             store:myPropTypes.object
//         }
//         componentWillMount(){
//             const {store} = this.context;
//             this.setState({
//                 color:store.getState().color
//             })
//             store.subscribe(()=>{
//                 this.setState({
//                     color:store.getState().color
//                 })
//             })
//         }
//         render(){
//             return <MyComponent color={this.state.color}></MyComponent>
//         }
//     }
//     return Temp
// }
export {connect}