import React from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';
import Swiper from '../../dist/react-swiper';

const App = React.createClass({
    render() {
        var config = {
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true
        };

        return (
            <div id="demo-slides-per-view" className="demo-wrapper">
                <Swiper swiperConfig={ config }>
                    <img src="http://placehold.it/1000x400&text=slide1"/>
                    <img src="http://placehold.it/1000x400&text=slide2"/>
                    <img src="http://placehold.it/1000x400&text=slide3"/>
                    <img src="http://placehold.it/1000x400&text=slide4"/>
                    <img src="http://placehold.it/1000x400&text=slide5"/>
                    <img src="http://placehold.it/1000x400&text=slide6"/>
                    <img src="http://placehold.it/1000x400&text=slide7"/>
                    <img src="http://placehold.it/1000x400&text=slide8"/>
                    <img src="http://placehold.it/1000x400&text=slide9"/>
                    <img src="http://placehold.it/1000x400&text=slide10"/>
                </Swiper>
            </div>
        )
    }
});

const content = document.getElementById('content');

ReactDom.render(<App/>, content);

