import React from 'react';
class Show extends React.Component {
    constructor() {
        super();
        
    }
    del(n){
        let ary = JSON.parse(localStorage.getItem('todoAry'));
        ary.splice(n,1);
        localStorage.setItem('todoAry',JSON.stringify(ary));
        this.setState({})
    }
    render() {
        let ary = JSON.parse(localStorage.getItem('todoAry')) || [];
        return <div className=''>
            <ul>
                {/* <li>
                    要做的事情
                    <button>删除</button>
                </li> */}
                {/* 自己添加一个 show 组件的子路由；； 点击文本是 展示二级路由；对应的组件的内容不限 */}
                {
                    ary.map((item,index)=>{
                        return <li key={index}>
                                {item}
                                <button onClick={()=>{this.del(index)}}>删除</button>
                                {/* 
                                    删除  先从 localStorage 中获取数据；
                                    然后从数据中把对应的数据删除；
                                    删除之后再把修改后的数据放到localStorage中 
                                */}
                            </li>
                    })
                }
            </ul>
        </div>;
    }
}

export default Show