import React from 'react'
import MyPropTypes from 'prop-types'
export const connect = (mapStateToProps,mapDispatchToProps) => (MyComponent) => {
    class Temp extends React.Component{
        constructor(){
            super();
            this.state = {}
        }
        static contextTypes = {
            store:MyPropTypes.object
        }
        componentWillMount(){
            const {store} = this.context;
            this.setState(mapStateToProps(store.getState()));
            this.remove = store.subscribe(()=>{
                this.setState(mapStateToProps(store.getState()))
            })
        }
        componentWillUnmount(){
            this.remove()
        }
        render(){
            return <MyComponent {...this.props} {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}></MyComponent>
        }
    }
    return Temp
}

export class Provider extends React.Component{
    // Provider 目的是为了 把context属性相关的部分 放到该组件中；也就是不让用户操作context
    // 使用时  <Provider store={store}>内容部分</Provider>
    // 该组件内部 定义了context中的 store属性；让所有的后代组建都可以通过 context调用到 store属性
    static childContextTypes = {
        store:MyPropTypes.object
    }
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return this.props.children
    }
}
 