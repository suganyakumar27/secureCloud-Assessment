import React from 'react'
import Digitalneeds from './Digitalneeds';
import Cloudpartnershiplogos from './Cloudpartnershiplogos';

const Content = () => {
  return (
    <>
    <section className='contentWrapper'>
        <div className='content_title'>
            Innovative Platforms that Thrive on Change
        </div>
        <p className='content_summary'>As a pioneer in enabling cloud transformation for global enterprises, we’re building on our foundation of cloud capabilities by creating innovative platforms that are time-tested and designed to drive success in your digital transformation journey. Aligned to the changing world of our customers, our platform pillars are architected on strategic innovation and powerful technologies that drive digital transformation to businesses of any size – today and as business needs evolve.</p>
    </section>
    <Digitalneeds/>
    <Cloudpartnershiplogos/>
    </>
  )
}

export default Content