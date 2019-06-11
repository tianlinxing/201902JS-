import React from 'react'
import ReactDOM from 'react-dom'

let ele = <div className='box' k={12}>
    hello
    <div id='zf'>珠峰</div>
</div>
let ele2 = React.createElement('div',{className:'box',k:12},'hello',React.createElement('div',{id:'zf'},'珠峰'));

ReactDOM.render(ele,document.getElementById('root'));