import React from 'react';
import aws_msp from '../assets/aws_msp.png';
import aws from '../assets/aws.png';
import googlecloud from '../assets/googlecloud.png';
import gxp from '../assets/gxp.png';
import hipaa from '../assets/hipaa.png';
import hitrust from '../assets/hitrust.png';
import iso from '../assets/iso.png';
import pci from '../assets/pci.png';
import sox from '../assets/sox.png';

const Cloudpartnershiplogos = () => {
    const logos1 = [aws_msp,aws,googlecloud,iso];
    const logos2 = [sox,hipaa,hitrust,pci,gxp];
  return (
    <section className='cloudlogoWrapper'>
        <div className='innercontent'>
            <div className='content_title'>
                Our Cloud Partnerships & Top-notch Industry Certifications 
            </div>
            <div className='logosWrapper'>
                <div>
                {
                    logos1.map((logo,i)=>{
                        return <img key={i} src={logo} alt='logos'/>                     
                    })
                }
                </div>
                <div>
                {
                    logos2.map((logo,i)=>{
                        return <img key={i} src={logo} alt='logos'/>                       
                    })
                }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cloudpartnershiplogos