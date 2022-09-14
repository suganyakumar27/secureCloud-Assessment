import React from 'react'

const footer = () => {
  return (
    <footer>
        <div className='footerinnerWrapper'>
            <div className='column1 column'>
                <p className='footer_summary'>SecureKloud is a cloud native company with a combination of products, frameworks and services, designed to solve problems around Blockchain, Cloud, Enterprise Security, Decision Engineering and Managed Services.</p>
                <ul className='socials'>
                    <li><div><i className="fa-brands fa-linkedin"></i><span>Linkedin</span></div><div>@securekloud.com</div></li>
                    <li><div><i className="fa-brands fa-square-facebook"></i><span>facebook</span></div><div>@securekloud.com</div></li>
                    <li><div><i className="fa-brands fa-medium"></i><span>medium</span></div><div>@securekloud.com</div></li>
                    <li><div><i className="fa-brands fa-youtube"></i><span>Youtube</span></div><div>@securekloud.com</div></li>
                </ul>
            </div>
            <div className='column2 column'>
                <div className='footer_title'>Platforms</div>
                <ul className='platformlist'>
                    <li><a href='/cloudedge'>CloudEdge</a></li>
                    <li><a href='/dataedge'>DataEdge</a></li>
                    <li><a href='/blockedge'>Blockedge</a></li>
                    <li><a href='/neutralzone'>Neutral Zone</a></li>
                    <li><a href='/cloudtransformation'>Cloud Transformation</a></li>
                </ul>
            </div>
            <div className='column3 column'>
                <div className='footer_title'>Address</div>
                <ul className='addresslist'>
                    <li><p>No.37 & 38, ASV Ramana Towers, 5th Floor, Venkat Narayana Road, T.Nagar, Chennai - 600 017 Tamil Nadu</p></li>
                    <li><i class="fa-solid fa-phone"></i><span>+91-44-6602-8000</span></li>
                    <li><i class="fa-solid fa-envelope"></i><span>info@securekloud.com</span></li>
                </ul>
            </div>
        </div>
        <div className='copyrightWrapper'>
            <div className='copyinnerWrapper'>
            <div>&copy; All Rights Reserved {(new Date().getFullYear())} | SecureKloud Technologies</div>
            <div><a href='/privacypolicy'>Privacy Policy</a> &nbsp;|&nbsp; <a href='/terms'>Terms&nbsp;&amp;&nbsp;Conditions</a></div>
            </div>
        </div>
    </footer>
  )
}

export default footer