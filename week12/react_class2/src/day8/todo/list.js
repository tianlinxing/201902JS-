import React from 'react';
// 每个组件  若想使用 redux 中的 内容；必须通过  connect
// import {connect} from './react-redux'
import {connect} from 'react-redux'
import {remove} from './store/actions'
class List extends React.Component {
    constructor() {
        super();
        
    }
    remove(n){
        // 要把当前点击的拿一项删除
        // this.props.dispatch(remove(n))
        this.props.remove123(remove(n))
    }
    render() {
        // 使用 store 中的 state 中的ary 进行循环渲染
        let {list} = this.props;
        // 名字之所以list 是由于下connect 自己定义的属性名是list
        return <div className=''>
            <ul>
                {/* <li>
                    6666
                    <button>删除</button>
                </li> */}
                {
                    list.map((item,index)=>{
                        return <li key={index}>
                                {item}
                                <button onClick={()=>{this.remove(index)}}>删除</button>
                            </li>
                    })
                }
            </ul>
        </div>;
    }
}

List = connect((state)=>{
    return{
        list:state.todo.ary
    }
},(dispatch)=>{
    return{
        // dispatch,
        remove123(action){
            dispatch(action)
        }
    }
})(List)

export default List