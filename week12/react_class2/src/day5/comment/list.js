import React from 'react';
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            list:[]
        }
    }
    add(obj){
        this.setState({
            list:this.state.list.concat(obj)
        })
    }
    componentDidMount(){
        window.myComment.add = this.add.bind(this)
    }
    render() {
        let {data} = this.props;
        return <div className='list_box'>
            <ul>
                {/* <li>
                    <span>姓名：</span>
                    <span>时间：</span><br/>
                    <div>评论内容</div>
                </li> */}
                {
                    this.state.list.map((item,index)=>{
                        return <li key={index}>
                            <span>姓名：{item.name}</span><br/>
                            <span>时间：{item.time}</span><br/>
                            <div>{item.comment}</div>
                        </li>
                    })
                }
            </ul>
        </div>;
    }
}

export default List