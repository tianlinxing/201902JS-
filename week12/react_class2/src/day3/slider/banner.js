import React from 'react';
class App extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:props.list.concat(props.list[0]),// 填补之后的新数据
            len:props.list.length+1 // 填补之后数组的长度
        }
    }
    render() {
        // 从 props中 把 index 结构出来
        let {index,initIndex} = this.props;
        let {data,len} = this.state;// 从state中把data 和 len 解构出来
        // let sty = {
        //     // 赋予banner盒子的 行内样式
        //     left: -index*400 + 'px',
        //     width: len * 400 + 'px',
        //     transition:'all 1s' // 实现过渡动效
        // }
        let sty = {
            width: len * 400 + 'px',
        }

        //  进行边界判断
        if(index >= len){
            // 到达有边界 若不做任何处理 将要显示出一个空白
            // 所以我们 要在这把他的left制成0；
            // 还需要把 父组件的index重置成 1
            // sty = {
            //     left:0,
            //     width: len * 400 + 'px',
            // }
            Object.assign(sty,{
                left:0
            })
            setTimeout(() => {
                initIndex(1)
            }, 10);
        }else if(index <= -1){
            // 到达左边界
            // 要把 父组件的 index 重置成 len - 2
            Object.assign(sty,{
                left:-(len-1)*400+'px'
            })
            setTimeout(() => {
                initIndex(len-2)
            }, 10);
        }else{
            // 正常情况
            Object.assign(sty,{
                left: -index * 400 + 'px',
                transition:"all 0.5s"
            })
        }
        // console.log(index)
        return <ul className='banner_box' style={sty}>
           {
               data.map((item,index)=>{
                   return <li key={index}>
                        <img src={item.img} alt=""/>
                   </li>
               })
           }
        </ul>;
    }
}

export default App