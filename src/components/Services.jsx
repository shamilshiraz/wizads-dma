// eslint-disable-next-line no-unused-vars
import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';


function Services() {

    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing
          once: false, // Animation only happens once
          offset: 100, // Distance from top to start animation
        });
      }, []); // Empty dependency array ensures this runs once on component mount


  return (
    <div className="services">
        <div className="servicesh">Our services.</div>
        <div className="serviceleft" >
            <div className="sd" data-aos="flip-left">
            <p id='servicesub'>
                Social media marketing
            </p>
            <div className="servicesdes">
                <img src="/smmanagement.jpeg" alt="" className='sdimg' />
                <p id='servicespara'>At Wizads, we build your brand’s social media pres
ence with engaging content and targeted cam
paigns, ensuring your message reaches the right 
audience and helps your brand thrive.</p>
            </div>
            </div>
            {/* <div className="parallelogram"></div> */}
            <div className="sd2" data-aos="flip-right">
            <p id='servicesub'>
                Social Media Management
            </p>
            <div className="servicesdes">
                <img src="/smmarketing.jpg" alt="" className='sdimg' />
                <p id='servicespara'>At Wizads, we use smart strategies and creative 
campaigns to boost your brand's visibility, target the 
right audience, and drive engagement, helping your 
brand grow in the digital world.</p>
            </div>
            </div>

        </div>
        <div className="serviceright">

            <div className="sd3"  data-aos="flip-left">
            <p id='servicesub'>
                Organic Content Creation
            </p>
            <div className="servicesdes">
                <img src="/ogc.jpg" alt="" className='sdimg' />
                <p id='servicespara'>Building trust through authentic content is crucial for 
success. We produce compelling organic content 
that reflects your brand’s voice and engages your 
audience, helping you build a loyal community.</p>
            </div>
            </div>
            {/* <div className="parallelogram2"></div> */}
            <div className="sd4"  data-aos="flip-right">
            <p id='servicesub'>
                Product Photography
            </p>
            <div className="servicesdes">
                <img src="/photo.jpg" alt="" className='sdimg' />
                <p id='servicespara'> A picture speaks volumes. Our product photogra
phy captures the true essence of your products, 
making them visually striking and attractive to your 
audience, driving better engagement and sales.</p>
            </div>
            </div>

        </div>
        <div className="serviceleft" >
            <div className="sd" data-aos="flip-left">
            <p id='servicesub'>
            Website Developement
            </p>
            <div className="servicesdes">
                <img src="/webdev.jpeg" alt="" className='sdimg' />
                <p id='servicespara'>At Wizads, we build your brand’s social media pres
ence with engaging content and targeted cam
paigns, ensuring your message reaches the right 
audience and helps your brand thrive.</p>
            </div>
            </div>
            {/* <div className="parallelogram"></div> */}
            <div className="sd2" data-aos="flip-right">
            <p id='servicesub'>
            SEO and Google ads
            </p>
            <div className="servicesdes">
                <img src="/meme.jpeg" alt="" className='sdimg' />
                <p id='servicespara'>At Wizads, we build your brand’s social media pres
ence with engaging content and targeted cam
paigns, ensuring your message reaches the right 
audience and helps your brand thrive.</p>
            </div>
            </div>

        </div>
        <div className="serviceright">

<div className="sd3"  data-aos="flip-left">
<p id='servicesub'>
    UI/UX Design
</p>
<div className="servicesdes">
    <img src="/ogc.jpg" alt="" className='sdimg' />
    <p id='servicespara'>Building trust through authentic content is crucial for 
success. We produce compelling organic content 
that reflects your brand’s voice and engages your 
audience, helping you build a loyal community.</p>
</div>
</div>
{/* <div className="parallelogram2"></div> */}
<div className="sd4"  data-aos="flip-right">
<p id='servicesub'>
    Branding and Google ads
</p>
<div className="servicesdes">
    <img src="/photo.jpg" alt="" className='sdimg' />
    <p id='servicespara'> A picture speaks volumes. Our product photogra
phy captures the true essence of your products, 
making them visually striking and attractive to your 
audience, driving better engagement and sales.</p>
</div>
</div>

</div>







    </div>
  )
}

export default Services