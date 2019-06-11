function fn(str){
    // 把 驼峰 转成 横杠 的 函数
    return str.replace(/[A-Z]/g,function(a){
        return '-'+a.toLowerCase()
    })
}
class Element{
    // 自己声明一个 元素类；
    constructor(type,props,children){
        // 我们把这三个参数赋成 私有属性
        this.type = type;
        this.props=  props;
        this.children = children;
    }
    render(){
        // 把传进来的内容转成 DOM
        // 首先 根据元素类型 创造一个元素
        let ele = document.createElement(this.type);
        // 第二步 把 props中的属性 设置成 元素的行内属性；
        for(let k in this.props){
            if(this.props.hasOwnProperty(k)){
                // this.props的私有属性
                // 稍微对 className 和 htmlFor 、style做一下处理 
                switch (k) {
                    case 'className':
                        ele.setAttribute('class',this.props[k])
                        break;
                    case 'htmlFor':
                        ele.setAttribute('for',this.props[k]);
                        break;
                    case 'style':
                        // 循环 style对应的对象； 然后拼接字符串
                        // 在给元素设置行内样式
                        let str = '';
                        for(let val in this.props[k]){
                            // 正常需要判断以下 是否是私有属性
                            // 还需要 把 驼峰 转成 横杠；
                            if(this.props[k].hasOwnProperty(val)){
                                str += `${fn(val)}:${this.props[k][val]};`
                            }
                        }
                        ele.setAttribute(k,str);
                        break;
                    default:
                        ele.setAttribute(k,this.props[k]);
                        break;
                }
                
            }
        }
        // 第三步 处理 children
        //   children  要不就是 文本   要不就iu是一个 新的结构
        // 怎么查看是否是新结构？  我们 instanceof 
        this.children.forEach(item=>{
            //若是一个新结构 则 我们调用render方法转成真实DOM
            // 否则直接创建一个新的文本节点
            item instanceof Element ? 
            ele.appendChild(item.render()) :
            ele.appendChild(document.createTextNode(item))
        })
        return ele;// 返回值 需要是我么们创造的这个 元素
    }
}



let React = {
    createElement(type,props,...children){
        // 该函数的第一个参数 是 标签类型；
        // 第二个参数 是  行内属性
        // 从第三个 及 以后  都属于 该标签的内容部分，所以 我们使用剩余运算符接收
        return new Element(type,props,children)
        // 返回的是一个 类的实例；
        // 也就是 在append时 我们需要给的是一个 真实的渲染过的DOM
    }
}
let  ReactDOM = {
    render(ele,container){
        // ele 是虚拟DOM  添加到元素内部的应该是一个真实DOM
        // 所以 这里 我们 append 进去的 应该是 处理过的ele
        container.appendChild(ele.render())
    }
}

let ele = React.createElement('div',
{id:'zf'},
'珠峰',
React.createElement('h1',{style:{color:'red',fontSize:'50px'}},'哈哈',React.createElement('span',null,'666')),
React.createElement('h1',{className:'box'},'哈哈'),
React.createElement('h1',null,'哈哈'),
'珠峰',
)
ReactDOM.render(ele,document.getElementById('root'))//结果是把ele添加到了 root里边

// 1、根据方法调用 确定 React 和 ReactDOM 的结构
