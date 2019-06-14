import React from 'react';
class App extends React.Component {
    
    render() {
        let {index,list=[],initIndex,len} = this.props;// 接收 索引  和 数据
        // index -1 0 1 2 3 4; 0 1 2 对于点来说是正常的情况; 3 4 都属于 0
        // index = -1 时 我们把它制成 list.length-1
        // 若 index >= list.length; 我们就把 index 制成 0即可
        if(index >= list.length){
            index = 0
        }
        console.log(index)
        function giveLi(n){
            let ary = [];
            for(let i =0 ; i < n; i++){
                ary.push(<li 
                    key={i} 
                    className={i==index ?'current':''}
                    onClick={()=>{initIndex(i)}}
                    ></li>)
            }
            return ary
        }

        return <ul className='focus_box'>
            {/* <li className='current'></li>
            <li></li>
            <li></li> */}
            {
                /* list.map((item,i)=>{
                    // 当 i== index的时候 我们 需要给当前的元素加上 current类名
                    return <li 
                            key={i}  
                            className={i==index ? 'current' : ''}
                            onClick = {()=>{initIndex(i)}}
                            ></li>
                }) */
                giveLi(len)
            }
        </ul>;
    }
}

export default App