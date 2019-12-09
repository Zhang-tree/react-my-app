import { Carousel, WingBlank } from 'antd-mobile';
import './test.scss'
import React, { Component, lazy, Suspense } from 'react'


export default class Test extends React.Component {
  state = {
    data: ['1', '2', '3',"4",'5'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://img95.699pic.com/photo/40165/7640.jpg_wh860.jpg', 'http://img95.699pic.com/photo/40165/7854.jpg_wh860.jpg', 'http://img95.699pic.com/photo/40165/5524.jpg_wh860.jpg',
        'http://img95.699pic.com/photo/40165/5231.jpg_wh860.jpg','http://img95.699pic.com/photo/40083/8971.jpg_wh860.jpg'],
      });
    }, 100);
  }


  render() {
    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.7}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                background:'#fff !important'
              }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
 
}


