import React from 'react';
import Header from './header'
import Swiper from './swiper2'
import '../../less/home.less'
class Home extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='home_box'>
            <Header></Header>
            <Swiper></Swiper>
            首页
        </div>;
    }
}

export default Home