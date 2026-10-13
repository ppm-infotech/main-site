import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar({ isOpen, setIsOpen }) {
    return (
        <div className={`sidebar ${isOpen ? "active" : ""}`}>
            <button
                className="close-btn"
                onClick={() => setIsOpen(false)}
            >
                ✕
            </button>

            <div className="sidebar-menu">
                <Link className="navbar-brand" to="/">
                    <img src='/media/images/ppm infotech svg.svg' alt="sidebar-logo" loading="lazy"/>
                </Link>

                <div className="sidebar-body mt-4">
                    <p className="sidebar-desc mt-3">
                        We help businesses build a strong digital presence, generate quality leads, and achieve measurable growth through innovative technology and strategic marketing.
                    </p>
                    <div className="get-in-tuch">
                        <h3 className="mb-3">Get In Touch</h3>

                        <a href="tel:+61430955534" className="me-4">
                            <i className="fa-solid fa-phone me-2"></i> Australia: +61 430 955 534
                        </a>
                        <a href="tel:+917605913863" className="me-4">
                            <i className="fa-solid fa-phone me-2"></i> India: +91 76059 13863
                        </a>
                        <a href="mailto:info@ppminfotech.com" className="me-4">
                            <i className="fa-solid fa-envelope me-2"></i> info@ppminfotech.com
                        </a>

                        <p className="me-4 mt-4 sidebar-p">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <span> Australia: Adelaide, Australia
                            </span>
                        </p>
                        <p className="me-4 sidebar-p">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <span> Delhi Office: 293, Lane No.2,<br />
                                Saidulajab, Near Saket Metro,<br />
                                New Delhi - 110030
                            </span>
                        </p>
                        <p className="me-4 sidebar-p">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <span>
                                Bhubaneswar Office: 507, DLF Cybercity,<br />
                                Patia Bhubaneswar - 751024
                            </span>
                        </p>
                    </div>

                    {/* Social Media Link  */}
                    <div className="sidebar-social-wrapper">
                        <a href="https://www.facebook.com/ppminfotech"  target='/'><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/ppminfotech/" target="/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/ppminfotech"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@PPMInfotech"  target='/'><i className="fa-brands fa-youtube"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
