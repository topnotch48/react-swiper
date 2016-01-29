import React from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';
import Swiper from '../../dist/react-swiper';

const App = React.createClass({
    render() {
        var config = {
            pagination: '.swiper-pagination',
            paginationClickable: true
        };

        return (
            <div id="demo-responsive" className="demo-wrapper">
                <Swiper swiperConfig={ config }>
                    <img src="http://placehold.it/1000x400&text=slide1"/>
                    <img src="http://placehold.it/1000x400&text=slide2"/>
                    <img src="http://placehold.it/1000x400&text=slide3"/>
                    <img src="http://placehold.it/1000x400&text=slide4"/>
                    <img src="http://placehold.it/1000x400&text=slide5"/>
                    <img src="http://placehold.it/1000x400&text=slide6"/>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
});

const content = document.getElementById('content');

ReactDom.render(<App/>, content);
