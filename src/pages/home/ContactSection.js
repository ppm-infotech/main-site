import ContactForm from '../../components/ContactForm';

export default function ContactSection() {
    return (
        <section className='contact-section py-5 mt-5'>
            <div className='container'>
                <div className='row'>

                    <div className='col-lg-6 col-md-6 col-12 contact-left'>
                        <span className="sub-title-left">Let’s Build Something Great</span>
                        <h2 className="main-title-left mt-3">
                            START PROJECT  <br />
                            <span className='text-span'>WITH US!</span>
                        </h2>
                        <p>Let’s Build Your Digital Success START YOUR PROJECT WITH PPM INFOTECH:
                            Have a project idea or planning to build a professional website for your
                            business? The team at PPM Infotech is ready to help. As the Best Web
                            Development Company in Bhubaneswar, we provide website development,
                            creative design, and digital marketing solutions tailored to your
                            business goals.
                        </p>

                        <div className="content-wrapper">
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="discription">
                                    <span>Need any help?</span>
                                    <a href='tel:7605913863' className="title-sm">
                                        <h5>+91  76059 13863</h5>
                                    </a>
                                </div>
                            </div>

                            <div className="contact-info mt-3">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="discription">
                                    <span>Email us anytime</span>
                                    <a href='mailto:info@ppminfotech.com'>
                                        <h5 className="title-sm">info@ppminfotech.com</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-12 col-md-6 contact-right'>
                        <ContactForm />
                    </div>
                </div>
            </div>

        </section>
    )
}
