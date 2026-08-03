import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import "../../styles/servicedetails.css";
import InquaryForm from '../../components/InquaryForm';


export default function SeoService() {
  return (
    <>
      {/* Meta Start */}
      <SEO
        keywords="SEO Company in Bhubaneswar"
        title='SEO Company in Bhubaneswar | PPM Infotech'
        description=" Boost your Google rankings with PPM Infotech's SEO services in Bhubaneswar. We provide on-page, off-page, local SEO, and technical SEO to grow your business. "
        canonical='https://ppminfotech.com/service/seo'
      />
      {/* Meta End  */}
      <PageHeader />

      {/* Service Details Section  */}
      <section className="reseller-details container py-5" >
        <div className="row g-5 reseller-details-holder">

          {/* Left Column */}
          <div className="col-md-4 resl-dtl-rgt">
            <div className="sticky-sidebar-wrapper d-flex flex-column" style={{ gap: "2rem" }}>

              {/* Popular Services */}
              <div className="service-card-dark p-4">
                <div className="bg-hdng-top">
                  <h5 className="text-light service-header">
                    <img src="/media/icons/star.png" alt="Popular Services" height="40" width="40" className="mx-3" />
                    Popular Services
                  </h5>
                </div>

                <ul className="service-left-list">
                  <li className="servic-left-li">
                    <Link to="/service/website-development">
                      <i class="fa-solid fa-circle-check"></i> WebSite Development
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/web-design">
                      <i class="fa-solid fa-circle-check"></i> WebSite Design
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/seo">
                      <i class="fa-solid fa-circle-check"></i> Search Engine Optomization (SEO)
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/smo">
                      <i class="fa-solid fa-circle-check"></i> Social Media Optimization (SMO)
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
                  <img src="/media/images/sidebar-service-image.jpg" alt="SEO Expert" />
                </div>

                <div className="rank-content">
                  <div className="rank-header">
                    <div className="rank-icon">
                      <img src="/media/icons/ppm-logo.png" alt="PPM logo" />
                    </div>
                    <h3>PPM Infotech<span>.com</span></h3>
                  </div>

                  <p>Ready to grow your online presence with proven SEO strategies?</p>
                </div>

                <div className="rank-footer">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto: info@ppminfotech.com"> info@ppminfotech.com</a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8 resl-dtl-left">

            <div className="service-feature-visual">
              <img
                src="/media/images/service3.webp"
                alt="Feature"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <h3 className="mb-3 heading">
              Result-Driven SEO Services to Grow Your   <strong>Online Visibility</strong>
            </h3>

            <p className="mb-3">
              At PPM Infotech, we provide strategic and data-driven SEO services designed to increase your website’s visibility, drive organic traffic, and improve search engine rankings. Our expert team implements proven techniques including on-page optimization, technical SEO, link building, and content strategy to deliver long-term measurable growth for your business.
            </p>

            <div className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded" style={{ height: "1px" }}></div>

            {/* Services List Section */}
            <div className="servs-list-bx-dsn">
              <h3 className="mb-3 heading">
                SEO Services <strong>– A Guide for Beginners</strong>
              </h3>
              <p>
                If you’re new to SEO, here’s a simple breakdown to understand how it works:
              </p>

              <div className="row servic-li-structr">
                <div className="col-md-6">
                  <ul>
                    <li><img src="/media/icons/check.png" alt="check" /> Keyword Research & Strategy</li>
                    <li><img src="/media/icons/check.png" alt="check-icon" /> On-Page Optimization</li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5><img src="/media/icons/check.png" alt="check-icon" />Local SEO Optimization</h5>
                    <p>Local SEO helps businesses rank higher in local searches and Google Maps results, increasing visibility among nearby customers and boosting foot traffic or local inquiries.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li><img src="/media/icons/check.png" alt="check-icon" />Technical SEO Improvements</li>
                    <li><img src="/media/icons/check.png" alt="check-icon" /> Link Building & Authority Growth</li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5><img src="/media/icons/check.png" alt="Content & Blog Optimization" />Content & Blog Optimization</h5>
                    <p>Creating SEO-optimized content improves keyword targeting, increases organic reach, and establishes your brand as an industry authority.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded" style={{ height: "1px" }}></div>

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
                        <img src="/media/icons/seo.png" alt="Data-Driven Ranking Strategy" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Data-Driven Ranking Strategy
                      </h2>

                      <p className="text-light opacity-75">
                        We analyze competitors, search trends, and user behavior to develop customized SEO strategies that deliver sustainable ranking improvements.
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
                        <img src="/media/icons/seo.png" alt="" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Performance Tracking & Reporting
                      </h2>

                      <p className="text-light opacity-75">
                        Our team provides detailed analytics, ranking reports, and measurable KPIs to track progress and continuously optimize your campaign for maximum ROI.
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

  )
}