import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = ({newsdetails}) => {
    const slidersettings = {
        infinite: false,
        nav: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };
  return (
    <section className='newsWrapper'>
        <div className='content_title'>
            News & Recent Events
        </div>
        <Slider {...slidersettings}>
            {newsdetails.map((news)=>{
                return (<div className='newsWrapper' key={news.id}>
                    <img src={news.src} alt={news.alt}/>
                    <div className='news_title'>{news.newstitle}</div>
                    <div className='news_description'>{news.newsdescription}</div>
                </div>)
            })}
        </Slider>
    </section>
  )
}

export default News