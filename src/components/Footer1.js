import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className=" footer-area">
      <div className='container'>
        {/* footer information section */}
        <div className='row footer-info-sec justify-content-between border-bottom pb-5'>
          {/* footer left side */}
          <div className='col-xl-3 col-lg-3 col-md-6 col-12 footer-left'>
            <div className='footer-left'>
              <Link className="navbar-brand logo_footer" to="/">
                <img src='/media/images/PPM Infotech logo.png' alt='footer-logo' loading="lazy" />
              </Link>

              <p className='desc my-4 text-justify'>
                We help businesses grow online with innovative strategies, modern technology, and results-driven digital marketing solutions.
              </p>

              <ul className="footer-social-media">
                <li><a href="https://www.facebook.com/ppminfotech" className='a-hover'  target='/'><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.linkedin.com/company/ppminfotech" className='a-hover'  target='/'><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/ppminfotech/" target='/' className='a-hover'><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@PPMInfotech" target='/' className='a-hover'><i className="fa-brands fa-youtube"></i></a></li>
              </ul>

              <div className='note-area mt-4'>
                <p>
                  <span>Note:</span> We do not publish your data
                </p>
              </div>
            </div>
          </div>

          {/* footer middle-1  */}
          <div className='col-xl-2 col-lg-3 col-md-6 col-12 footer-right'>
            <h4 className='mb-4'>Quick Links</h4>


            <ul className="footer-links ">
              <li className='nav-item '><NavLink to="/" end className='nav-link'>
                <i className="fa-solid fa-angle-right"></i> Home</NavLink>
              </li>
              <li className='nav-item '><NavLink to="/about" className='nav-link'>
                <i className="fa-solid fa-angle-right"></i> About</NavLink>
              </li>
              <li className='nav-item '><NavLink to="/service" className='nav-link'>
                <i className="fa-solid fa-angle-right"></i> Services</NavLink>
              </li>
              <li className="nav-item"><NavLink to="/blog" className="nav-link" >
                <i className="fa-solid fa-angle-right"></i>  Blog</NavLink>
              </li>
              <li className='nav-item '><NavLink to="/website-development" className='nav-link'>
                <i className="fa-solid fa-angle-right"></i> Website Development</NavLink>
              </li>
              <li className='nav-item '><NavLink to="/google-workspace" className='nav-link'>
                <i className="fa-solid fa-angle-right"></i> Google Workspace</NavLink>
              </li>
            </ul>

          </div>

          {/* footer middle-2  */}
          <div className='col-xl-3 col-lg-3 col-md-6 col-12 footer-middle'>
            <h4 className='mb-4'>Get In Touch</h4>

            <div className='footer-office-info'>
              <div className='footer-icon-bx mb-3'>
                <span className='footer-icon'><i className="fa-solid fa-phone"></i></span>
                <div className='footer-icon-info'>
                  <span>Call For Australia</span>
                  <a href='tel:+61430955534' className='mt-2'>+61 430 955 534</a>
                </div>
              </div>

              <div className='footer-icon-bx mb-3'>
                <span className='footer-icon'><i className="fa-solid fa-phone"></i></span>
                <div className='footer-icon-info'>
                  <span>Call For India</span>
                  <a href='tel:+917605913863' className='mt-2'>+91  76059 13863</a>
                </div>
              </div>

              <div className='footer-icon-bx mb-3'>
                <span className='footer-icon'><i className="fa-regular fa-envelope"></i></span>
                <div className='footer-icon-info'>
                  <span>Work with us</span>
                  <a href='mailto:info@ppminfotech.com' className='mt-2'>info@ppminfotech.com</a>
                </div>
              </div>

            </div>
          </div>

          {/* footer right side */}
          <div className='col-xl-3 col-lg-3 col-md-6 col-12 footer-middle'>
            <h4 className='mb-4'>Our Location</h4>

            <div className='footer-icon-bx addres-fot-bx'>
              <span className='footer-icon'><i className="fa-solid fa-location-dot"></i></span>
              <div className='footer-icon-info'>
                <p className='mt-2' >
                  <span className='color-main'>Delhi Office: </span>
                  293, Lane No.2,<br />
                  Saidulajab, Near Saket Metro,New Delhi - 110030
                </p>
              </div>
            </div>
            <div className='footer-icon-bx addres-fot-bx'>
              <span className='footer-icon'><i className="fa-solid fa-location-dot"></i></span>
              <div className='footer-icon-info'>
                <p className='mt-2' >
                  <span className='color-main'>Bhubaneswar Office: </span>
                  507, DLF Cybercity, Patia<br />
                  Bhubaneswar - 751024
                </p>
              </div>
            </div>
            <div className='footer-icon-bx addres-fot-bx'>
              <span className='footer-icon'><i className="fa-solid fa-location-dot"></i></span>
              <div className='footer-icon-info'>
                <p className='mt-2' >
                  <span className='color-main'>Australia: </span>
                  Adelaide, Australia
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* footer copy right section */}
        <div className='row copy-right-area py-3'>
          {/* left  */}
          <div className='col-xl-6 col-lg-6 col-12 copy-left'>
            <p className="disc text-center">
              <Link to='/'>PPM Infotech </Link>- Copyright 2026. All rights reserved.
            </p>
          </div>

          {/* right  */}
          <div className='col-xl-6 col-lg-6 col-12 copy-right'>
             <ul className="copyrt-links ">
              <li className='nav-item '>
                <NavLink to="/privacy-policy" end className='nav-link'>Privacy Policy</NavLink>
              </li>
              <li className='nav-item '>
                <NavLink to="/term-condition" className='nav-link'>Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
