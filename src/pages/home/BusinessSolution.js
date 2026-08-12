
import ButtonComponent from '../../components/button';
export default function BusinessSolution() {
    return (
        <section className='home-about-sec py-5'>
            <div className='container'>
                <div className='row mb-3 align-items-center justify-content-center'>
                    {/* <span className='sub-title-left text-center'>About PPM Infotech</span> */}
                    <h1 className="main-title-left text-center col-lg-8 col-md-12 col-12">
                        Best Website Development Company 
                        <span className='text-span'> in Bhubaneswar, India </span>
                    </h1>
                </div>
                <div className='row '>
                    {/* left  */}
                    <div className='col-lg-5 col-md-5 mb-4 col-12 mb-lg-0 home-about-left'>
                        <div className='home-about-img position-relative'>
                            {/* Main Image */}
                            <img src="/media/images/about-ppm.jpeg" className="img-fluid main-img" alt="Business" loading="lazy" />
                            {/* Small Overlay Image */}
                            <div className="overlay-img">
                                <img src="/media/images/side-img1.png" className="img-fluid" alt="Business-seo" loading="lazy" />
                            </div>
                            {/* Play Button Box   */}
                            <a href="https://youtu.be/HF2JAnHXgwQ" className="vedio-icone" target="_blank" rel="noopener noreferrer">
                                <span id="play-video" className="video-play-button">
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* right  */}
                    <div className='col-lg-7 col-md-7 col-12 mb-4 mb-lg-0 home-about-right'>
                        {/* <span className="sub-title-left">JUST AN IT CONSULTING ORGANIZATION</span> */}
                        <p className="desc  ">
                            PPM Infotech is one of the <b>top web development company in Bhubaneswar, India</b> that offers companies of all sizes cutting-edge, scalable, and high-performing digital solutions. Our team of skilled developers and designers <b>creates SEO-friendly, secure, and responsive websites</b> that support brands in expanding their online presence. Our specialty is developing unique websites, web apps, and eCommerce platforms that are suited to your company's requirements. Our solutions are made to enhance <b>user experience, boost engagement, and promote business expansion,</b> regardless of the size of your company—startup, small, or large.
                            <br />
                            <br />
                            In today’s digital-first world, traditional marketing alone no longer delivers the desired results. Most users ignore generic ads and engage only with content that is relevant to their interests. That’s why businesses are adopting<b> modern digital solutions, SEO strategies, and AI-powered tools </b>to stay competitive and grow online. you can explore our services
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
                                    <li><i className="fa-solid fa-circle-check"></i> Facebook / Meta Ads</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Google workspace</li>
                                </ul>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-4 flex-wrap">
                            <div className="about-user">
                                <div className="about-user-img-bx">
                                    <img alt="Business_User" src="media/images/user1.jpg" loading="lazy" />
                                    <img alt="Business_User" src="media/images/user2.jpg" loading="lazy" />
                                    <img alt="Business_User" src="media/images/user3.jpg" loading="lazy" />
                                </div>
                                <div className="about-user-reviews mx-3">
                                    <h5 className="title m-0">1500+</h5>
                                    <span>Active Reviews</span>
                                </div>
                                <div>
                                    <ButtonComponent path={"/service"} name={"Explore More"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
