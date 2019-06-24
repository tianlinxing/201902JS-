import React from 'react';
import Swiper2 from 'swiper'
import {initSlider} from '../../store/actions/actions.js'
import {connect} from 'react-redux'
class App extends React.Component {
    constructor() {
        super();
        
    }
    componentDidMount(){
        // this.initSwiper();
        // 使用 redux 的方式请求数据；
        // 可以这么写的前提是 本组件使用了 connet高阶组件处理
        this.props.dispatch(initSlider())
    }
    componentDidUpdate(){
        this.initSwiper();
    }
    initSwiper(){
        new Swiper2('.swiper-container', {
            loop:true,
            autoplay:{
                disableOnInteraction:false,
                autoplay:true,
                delay:2000
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });
    }
    render() {
        console.log(this.props.ary)
        let { ary } = this.props; // 解构出  ary
        return <div className=''>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        ary.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                <img src={item} alt=""/>
                            </div>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>;
    }
}

// connect 两层参数
App = connect((state)=>{
    return{
        // state
        ary:state.sliderAry.ary
    }
},(dispatch)=>{
    return {
        dispatch
    }
})(App)

export default App