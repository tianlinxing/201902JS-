import React from 'react';
import Swiper2 from 'swiper'
class App extends React.Component {
    constructor() {
        super();
        
    }
    componentDidMount(){
        this.initSwiper()
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
        return <div className=''>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    <div className="swiper-slide">Slide 4</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>;
    }
}

export default App