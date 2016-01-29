# react-swiper

> Simple react component built-in using portal technique,  which is just a tiny wrapper around idangero's swiper library ( http://www.idangero.us/ )

## Install

```sh
$ npm install --save react-swiper
```

## Usage
Config is just a plain js object, which represents the original config required by swiper js,
for more information and available options, please check http://www.idangero.us/swiper/api/#

```jsx
 var config = {
            pagination: '.swiper-pagination',
            paginationClickable: true
        };
    
 <Swiper swiperConfig={ config }>
    <img src="http://placehold.it/1000x400&text=slide1"/>
    <img src="http://placehold.it/1000x400&text=slide2"/>
    <img src="http://placehold.it/1000x400&text=slide3"/>
    <img src="http://placehold.it/1000x400&text=slide4"/>
    <img src="http://placehold.it/1000x400&text=slide5"/>
    <img src="http://placehold.it/1000x400&text=slide6"/>
</Swiper>
```

## Callbacks

use onSwiperMount and onSwiperUnmount callbacks to control inner swiper logic while using component.

```jsx

onSwiperMount: function(swiper){
    this.swiper = swiper;
},

onNextButtonClick: function(e){
    this.swiper.slideNext();
}
```

## Examples

There are 3 simple examples in demo folder, you can check more demos [here](http://www.idangero.us/swiper/demos/).
