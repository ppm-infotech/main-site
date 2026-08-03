import SEO from "../../components/SEO";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "../../styles/servicedetails.css";
import InquaryForm from "../../components/InquaryForm";

export default function WebdevelopmentService() {
  return (
    <>
      {/* Meta Start */}
      <SEO
        title=' Website Development Company in Bhubaneswar | PPM Infotech'
        description=' PPM Infotech offers professional website development services in Bhubaneswar with responsive, SEO-friendly, secure, and custom websites for businesses.' 
        keywords="Website Development Company in Bhubaneswar"
        canonical='https://ppminfotech.com/service/website-development'
      />
      {/* Meta End  */}

      <PageHeader />

      {/* Service Details Section  */}
      <section className="reseller-details container py-5">
        <div className="row g-5 reseller-details-holder">
          {/* Left Column */}
          <div className="col-md-4 resl-dtl-rgt">
            <div
              className="sticky-sidebar-wrapper d-flex flex-column"
              style={{ gap: "2rem" }}
            >
              {/* Popular Services */}
              <div className="service-card-dark p-4">
                <div className="bg-hdng-top">
                  <h5 className="text-light service-header">
                    <img
                      src="/media/icons/star.png"
                      alt="Popular Services"
                      height="40"
                      width="40"
                      className="mx-3"
                    />
                    Popular Services
                  </h5>
                </div>

                <ul className="service-left-list">
                  <li className="servic-left-li">
                    <Link to="/service/website-development">
                      <i class="fa-solid fa-circle-check"></i> WebSite
                      Development
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/web-design">
                      <i class="fa-solid fa-circle-check"></i> WebSite Design
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/seo">
                      <i class="fa-solid fa-circle-check"></i> Search Engine
                      Optomization (SEO)
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/smo">
                      <i class="fa-solid fa-circle-check"></i> Social Media
                      Optimization (SMO)
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/google-ad">
                      <i class="fa-solid fa-circle-check"></i> Google Ad
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/meta-ad">
                      <i class="fa-solid fa-circle-check"></i> Meta Ad
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Sidebar CTA Card */}
              <div className="rank-card">
                <div className="rank-image">
                  <img
                    src="/media/images/sidebar-service-image.jpg"
                    alt="SEO Expert"
                  />
                </div>

                <div className="rank-content">
                  <div className="rank-header">
                    <div className="rank-icon">
                      <img src="/media/icons/ppm-logo.png" alt="PPM logo" />
                    </div>
                    <h3>
                      PPM Infotech<span>.com</span>
                    </h3>
                  </div>

                  <p>
                    Ready to grow your online presence with proven SEO
                    strategies?
                  </p>
                </div>

                <div className="rank-footer">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto: info@ppminfotech.com">
                    {" "}
                    info@ppminfotech.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8 resl-dtl-left">
            <div className="service-feature-visual">
              <img
                src="/media/images/service1.jpg"
                alt="Feature"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <h3 className="mb-3 heading">
              Professional Web Development Services for{" "}
              <strong>Modern Businesses</strong>
            </h3>

            <p className="mb-3">
              At PPM Infotech, we deliver high-performance, responsive, and
              scalable web development solutions tailored to your business
              goals. Our expert team combines modern technologies, user-focused
              design, and SEO best practices to build websites that not only
              look impressive but also drive measurable results and business
              growth.
            </p>

            <div
              className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded"
              style={{ height: "1px" }}
            ></div>

            {/* Services List Section */}
            <div className="servs-list-bx-dsn">
              <h3 className="mb-3 heading">
                Website Development <strong>– A Guide for Beginners</strong>
              </h3>
              <p>
                Starting your online journey can feel overwhelming. Here’s a
                simple guide to understanding website development:
              </p>

              <div className="row servic-li-structr">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <img src="/media/icons/check.png" alt="check" /> Define
                      Your Purpose & Goals
                    </li>
                    <li>
                      <img src="/media/icons/check.png" alt="check-icon" />{" "}
                      Choose the Right Technology Stack
                    </li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5>
                      <img src="/media/icons/check.png" alt="check-icon" />
                      Frontend Development
                    </h5>
                    <p>
                      Frontend development focuses on the visual and interactive
                      parts of a website.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li>
                      <img src="/media/icons/check.png" alt="check-icon" />{" "}
                      Focus on User Experience (UX/UI)
                    </li>
                    <li>
                      <img src="/media/icons/check.png" alt="check-icon" />{" "}
                      Optimize for SEO & Performance
                    </li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5>
                      <img src="/media/icons/check.png" alt="Backend Development" />
                      Backend Development
                    </h5>
                    <p>
                      Backend development manages server, database, and
                      application logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4">
              <h3 className="mb-3 heading">
                Custom Web Application  <strong>Development</strong>
              </h3>
              <p>
                We build secure and scalable custom web applications tailored to
                your unique business processes. Whether you need a booking
                system, CRM, ERP solution, or client portal, our team develops
                robust platforms that improve efficiency and automate workflows.
              </p>

              <div className="web-fitured mt-4">
                {/* card- 1 */}
                <div className="servic-feature-Fcard mt-3">
                  <h5>
                    <img src="/media/icons/check.png" alt="check-icon" />
                    E-Commerce Development Solutions
                  </h5>
                  <p>
                    Launch a powerful online store with secure payment gateways,
                    product management systems, inventory tracking, and seamless
                    checkout experiences. We develop high-converting e-commerce
                    platforms optimized for speed, security, and mobile
                    performance.
                  </p>
                </div>
                {/* card- 2 */}
                <div className="servic-feature-Fcard mt-3">
                  <h5>
                    <img src="/media/icons/check.png" alt="check-icon" />
                    Website Security & Maintenance
                  </h5>
                  <p>
                    Your website needs continuous protection and updates. We provide regular maintenance, security monitoring, malware protection, performance optimization, and backup management to keep your business running smoothly without interruptions.
                  </p>
                </div>
                {/* card- 3*/}
                <div className="servic-feature-Fcard mt-3">
                  <h5>
                    <img src="/media/icons/check.png" alt="check-icon" />
                    API Integration & Third-Party Tools
                  </h5>
                  <p>
                    We integrate payment gateways, CRM systems, marketing automation tools, live chat systems, analytics platforms, and other third-party APIs to enhance your website’s functionality and business automation.
                  </p>
                </div>
                {/* card- 4*/}
                <div className="servic-feature-Fcard mt-3">
                  <h5>
                    <img src="/media/icons/check.png" alt="check-icon" />
                    Speed & Performance Optimization
                  </h5>
                  <p>
                    A slow website can reduce conversions and harm SEO rankings. We optimize code, compress images, implement caching strategies, and improve server performance to ensure lightning-fast loading speeds across all devices.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded"
              style={{ height: "1px" }}
            ></div>

            {/* Cards Section */}
            <div className="seller-details-card-wrap">
              <h3 className="mb-3 heading">
                Boost your brand <strong>with strategy</strong>
              </h3>

              <div className="row g-4 resl-dtls-card-wrap">
                {/* card-1 */}
                <div className="col-sm-6 reseller-details-bx">
                  <div className="reseller-details-card h-100">
                    <div className="hover-lines"></div>
                    <div className="serv-resdtl-card-content">
                      <figure>
                        <img src="/media/icons/development.png" alt="Data-Driven Website Planning" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Data-Driven Website Planning
                      </h2>

                      <p className="text-light opacity-75">
                        We analyze your target audience, competitors, and market
                        trends before building your website. This strategic
                        approach ensures higher engagement, better conversions,
                        and long-term growth.
                      </p>
                    </div>
                  </div>
                </div>
                {/* card-2 */}
                <div className="col-sm-6 reseller-details-bx">
                  <div className="reseller-details-card h-100">
                    <div className="hover-lines"></div>
                    <div className="serv-resdtl-card-content">
                      <figure>
                        <img src="/media/icons/development.png" alt=" Conversion-Focused Development" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Conversion-Focused Development
                      </h2>

                      <p className="text-light opacity-75">
                        Our websites are designed not just for appearance but
                        for results. We integrate clear call-to-actions,
                        optimized landing pages, and performance tracking to
                        maximize leads and sales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InquaryForm />
    </>
  );
}
