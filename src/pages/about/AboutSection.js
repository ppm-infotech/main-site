import React from 'react';

export default function AboutSection() {
    return (
        <section className='about-section py-5'>
            <div className='container'>
                <div className='row'>
                    {/* left section  */}
                    <div className='col-xl-5 col-lg-5 col-md-5 col-12'>
                        <div className='home-about-img position-relative'>
                            {/* Main Image */}
                            <img src="/media/images/about-ppm.jpeg" className="img-fluid main-img" alt="Business"  loading="lazy"/>
                            {/* Small Overlay Image */}
                            <div className="overlay-img">
                                <img src="/media/images/side-img2.jpeg" className="img-fluid" alt="Businesimage" loading="lazy"/>
                            </div>
                            {/* Play Button Box   */}
                            <a href="https://youtu.be/HF2JAnHXgwQ" className="vedio-icone" target="_blank" rel="noopener noreferrer">
                                <span id="play-video" className="video-play-button">
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* right section  */}
                    <div className='col-xl-7 col-lg-7 col-md-7 col-12'>
                        <span className="sub-title-left">About Us</span>
                        <h2 className="main-title-left mt-3">
                           Driving Digital   <br />
                            <span>Excellence <span className='text-span'> with Purpose </span></span>
                        </h2>
                        <p className="desc mt-3 mb-0">
                            PPM Infotech is a results-driven IT company delivering innovative digital solutions for modern businesses. We specialize in Web Development, SEO, SMO, Google Ads, and Meta Ads to help brands grow faster and smarter.
                        </p>
                        <p className='mt-2 mb-0'>
                            In today’s fast-changing digital world, we create agile and future-ready strategies tailored to your unique business goals. From idea to execution, we focus on building powerful online experiences that drive traffic, leads, and revenue.
                        </p>
                        <p className='mt-1'>
                            Your growth is our priority. Whether you need complete digital transformation or performance marketing support, our expert team is committed to delivering measurable success and long-term impact.
                        </p>

                        {/* Bullet Points  */}
                        <div className="row mt-4">
                            <div className="col-sm-6">
                                <ul className="about-list">
                                    <li><i className="fa-solid fa-circle-check"></i> WebSite Development</li>
                                    <li><i className="fa-solid fa-circle-check"></i> WebSite Design</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Google Ads</li>
                                    <li><i className="fa-solid fa-circle-check"></i>MS Office 365</li>
                                </ul>

                            </div>

                            <div className="col-sm-6">
                                <ul className="about-list">
                                    <li><i className="fa-solid fa-circle-check"></i> Social Media Optimization(SMO)</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Search Engine Optimization(SEO) </li>                                    
                                    <li><i className="fa-solid fa-circle-check"></i> Meta Ads</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Google workspace</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
