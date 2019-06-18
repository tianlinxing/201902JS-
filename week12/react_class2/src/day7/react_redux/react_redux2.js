import React from 'react'
import myPropTypes from 'prop-types'
// 把 dispatch 传给子组件
// 通过 mapDispatchToProps 这个函数传递  函数是自己定义的，但是一般都是这个名字

export const connect = (mapStateToProps,mapDispatchToProps)=>(MyComponent)=>{
    class Temp extends React.Component{
        constructor(){
            super();
            this.state = {}
        }
        static contextTypes = {
            store:myPropTypes.object
        }
        componentWillMount(){
            const {store} = this.context;
            let state = store.getState();
            this.setState(mapStateToProps(state))
             this.remove = store.subscribe(()=>{
                state = store.getState();
                this.setState(mapStateToProps(state))
            })
        }
        componentWillUnmount(){
            this.remove();
        }
        render(){
            // mapDispatchToProps(this.context.store.dispatch) 返回结果是个对象
            // 对象中是 使用connect 的组件 自己定义的一些属性
            // 对于Button 来说 返回的是一个 {dispatch:dispatch}
            return <MyComponent {...this.props} {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}></MyComponent>
        }
    }
    return Temp
}

export class Provider extends React.Component{
    static childContextTypes = {
        store:myPropTypes.object
    }
    getChildContext (){
        return{
            store:this.props.store
        }
    }
    render(){
        return this.props.children
    }
}

/*
    connect 是react-redux提供的一个高阶组件，
    他有两层参数， 第一层参数 接收一个mapStateToProps和mapDispatchToProps
    这两个参数都是函数， mapStateToPtops 是把 用户自定义的state变成组件的props，
        该函数 是把 用户定义的对象 变成 connect声明的临时组件 的 state中的属性；
        由于connect 返回了 一个新的临时组件， 临时组件是由 传进来的组件组成的，
        内部是把 临时组件的 state变成传进来组件的 props;
    mapDispatchToProps 功能是把 store中的 dispatch 通过父传子的方式给了
        传进来的那个组件
*/
