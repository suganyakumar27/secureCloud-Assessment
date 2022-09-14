import React from 'react';
import cloudimage from '../assets/cloud.png';

const Digitalneeds = () => {
  return (
    <section className='content'>
        <div className='innercontent'>
            <div className='sectionone'>
                <div className='content_title'>
                Meeting the Needs of a Digital-first World
                </div>
                <p className='content_summary'>For 14+ years, SecureKloud has led the way in delivering cloud excellence with unwavering security and trust. Singularly focused on powering digital transformation, our automated cloud platforms have helped some of the Fortune 500 companies stay ahead of the growth curve and outlast their competitors.</p>
                <p className='content_summary'>Trusted for its value creation, expertise, and agility, the company is committed to continuous innovation that enables enterprises to lead in a digital-first world. With our platform-oriented approach, strategic partnerships, top-notch industry certifications, and proven managed services, we are uniquely positioned to deliver the cutting-edge digital experiences that you and your customers deserve.</p>
            </div>
            <div className='sectiontwo'>
                <img src={cloudimage} alt='cloud'/>
            </div>
        </div>
    </section>
  )
}

export default Digitalneeds