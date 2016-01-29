import React from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';
import Swiper from '../../dist/react-swiper';

const App = React.createClass({
    render() {
        var config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 3,
            spaceBetween: 30
        };

        return (
            <div id="demo-slides-per-view" className="demo-wrapper">
                <Swiper swiperConfig={ config }>
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
});

const content = document.getElementById('content');

ReactDom.render(<App/>, content);

