import React from 'react'

export default function WhyChooseUs() {
    return (
        <section className='why-chose-sec py-5'>
            <div className="container">
                <div className='row mb-4'>
                    <span className="sub-title-left text-center">Why Businesses Choose PPM Infotech</span>
                        <h2 className="main-title-left mt-3 text-center">
                            We Make Your 
                            <span> Digital Journey <span className='text-span'> Simple and Effective</span></span>
                    </h2>
                </div>

                <div className='row choose-row2 align-items-center justify-content-between'>
                    {/* left image area */}
                    <div className='col-lg-5 col-md-6 col-12 mb-4 mb-lg-0 why-chose-left position-relative'>
                        <div className='why-chose-img position-relative'>
                            {/* Main Image */}
                            <img src="/media/images/why-chose-ppm.jpeg" className="img-fluid main-img" alt="Business" loading="lazy" />
                        </div>
                        <div className="success-rate">
                            <h4 className="title">85%</h4>
                            <p>Success Rate</p>
                        </div>
                    </div>

                    {/* right content area */}
                    <div className='col-lg-7 col-md-6 col-12 mb-4 mb-lg-0 home-about-right'>
                        
                        <p className="desc mt-3">
                            We focus on delivering <b>reliable digital solutions</b> that help businesses grow with confidence. Our team combines <b>modern technology, smart strategies, and industry expertise</b> to provide services that truly add value. We believe in building long-term partnerships by maintaining <b>transparency, clear communication, and consistent results.</b>

                            <br />
                            <br />
                            Every project is carefully planned to match the <b>unique goals of each business.</b> From Website Development and Digital Marketing to Google Workspace and Microsoft Office 365 solutions, we ensure<b> quality, efficiency, and innovation </b> in every service we deliver. Our commitment is to support your business with powerful <b>digital solutions that drive long-term growth.</b>
                        </p>

                        {/* Icon Box  */}
                        <div className='why-chose-iconbx-wrap pt-4 '>
                            <div className="why-chose-iconbx">
                                <div className="why-chose-icon position-relative">
                                    <img src="/media/icons/project.png" alt="why-choose-us-icon" loading="lazy"/>
                                </div>
                                <div className="why-chose-content">
                                    <h6 className="title">Timely Project Reports with Full Transparency</h6>
                                    <p className="p"> Regular project updates ensure transparency and keep clients informed about progress and results.</p>
                                </div>
                            </div>
                            <div className="why-chose-iconbx mt-4 ">
                                <div className="why-chose-icon position-relative">
                                    <img src="/media/icons/client.png" alt="why-choose-us-icon" loading="lazy"/>
                                </div>
                                <div className="why-chose-content">
                                    <h6 className="title">Customized Strategies Based on Client Needs</h6>
                                    <p className="p"> Solutions tailored to meet specific business goals, industry needs, and growth objectives..</p>
                                </div>
                            </div>
                            <div className="why-chose-iconbx mt-4 ">
                                <div className="why-chose-icon position-relative">
                                    <img src="/media/icons/ai.png" alt="why-choose-us-icon" loading="lazy"/>
                                </div>
                                <div className="why-chose-content">
                                    <h6 className="title">Smart AI-Powered Business Automation</h6>
                                    <p className="p"> AI-driven automation helps streamline digital tasks and improve overall business efficiency.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
