// connect 是个高阶组件
import React from 'react'
import myPropTypes from 'prop-types'
export const connect = (MyComponent)=>{
    
    class Temp extends React.Component{
        constructor(){
            super();
            this.state = {
                color:''
            }
        }
        static contextTypes = {
            store:myPropTypes.object
        }
        componentWillMount(){
            const {store} = this.context;
            this.setState({
                color:store.getState().color
            })
            store.subscribe(()=>{ // 解决视图更新的问题
                this.setState({
                    color:store.getState().color
                })
            })
        }
        render(){
            return <MyComponent color={this.state.color}></MyComponent>
        }
    }
    return Temp
}