import React from 'react';
import ReactDom from 'react-dom';
import merge from 'merge';
import ReactDomServer from 'react-dom/server';
import Swiper from 'swiper/dist/js/swiper.min';
import css from 'style!css!swiper/dist/css/swiper.min.css';

const defaultSwiperConfig = {
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    paginationHiddenClass: 'swiper-pagination-hidden',
    buttonDisabledClass: 'swiper-button-disabled'
};

const SwiperComponent = React.createClass({
    propTypes: {
        swiperConfig: React.PropTypes.object,
        containerClass: React.PropTypes.string,
        onSwiperMount: React.PropTypes.func,
        onSwiperUnmount: React.PropTypes.func
    },

    getDefaultProps(){
        return {
            swiperConfig: defaultSwiperConfig,
            containerClass: 'swiper-container'
        };
    },

    componentDidMount(){
        var config = this.props.swiperConfig;

        this.swiper = this.createSwiper();

        if(config.loop){
            this.swiper.on('onSlideChangeEnd', (swiper) => { swiper.fixLoop(); });
        }

        if(this.props.onSwiperMount){
            this.props.onSwiperMount(this.swiper);
        }
    },

    componentWillUnmount(){
        if(this.swiper){
            this.swiper.off();
        }

        if(this.props.onSwiperUnmount){
            this.props.onSwiperUnmount(this.swiper);
        }
    },

    formatChildren(children, config) {
        return React.Children.map(children, (child, index) => {
            return <div className={ config.slideClass } key={ index }>{ child }</div>
        });
    },

    createSwiper(){
        var config = merge(defaultSwiperConfig, this.props.swiperConfig);
        var pagination  = config.hasOwnProperty('pagination')   ? null : <div className="swiper-pagination"></div>;
        var btnNext     = config.hasOwnProperty('nextButton')   ? null : <div className="swiper-button-next"></div>;
        var btnPrev     = config.hasOwnProperty('prevButton')   ? null : <div className="swiper-button-prev"></div>;
        var scrollBar   = config.hasOwnProperty('scrollbar')    ? null : <div className="swiper-scrollbar"></div>;
        var children = this.formatChildren(this.props.children, config);

        var container = ReactDom.findDOMNode(this.refs.swiperContainer);

        var content = (
            <div className={ this.props.containerClass } ref="swiperContainer">
                <div className={ config.wrapperClass }>
                    { children }
                </div>
                { pagination }
                { btnNext }
                { btnPrev }
                { scrollBar }
            </div>
        );

        container.innerHTML = ReactDomServer.renderToStaticMarkup(content);

        return new Swiper(container.children[0], config);
    },

    render() {
        return (
            <div ref="swiperContainer" className="react-swiper-component"></div>
        )
    }
});

export default SwiperComponent;