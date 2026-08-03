import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import "../../styles/servicedetails.css";
import InquaryForm from '../../components/InquaryForm';


export default function GoogleAdService() {
  return (
    <>
      {/* Meta Start */}
      <SEO
        keywords="Google Ads Services in Bhubaneswar"
        title='Google Ads Services in Bhubaneswar | PPM Infotech'
        description="Drive quality leads and boost sales with PPM Infotech's Google Ads services in Bhubaneswar. We create, manage, and optimize high-converting PPC campaigns." 
        canonical='https://ppminfotech.com/service/google-ad'
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
                      <i className="fa-solid fa-circle-check"></i> WebSite Development
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/web-design">
                      <i claclassNamess="fa-solid fa-circle-check"></i> WebSite Design
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/seo">
                      <i className="fa-solid fa-circle-check"></i> Search Engine Optomization (SEO)
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/smo">
                      <i className="fa-solid fa-circle-check"></i> Social Media Optimization (SMO)
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/google-ad">
                      <i className="fa-solid fa-circle-check"></i> Google Ad
                    </Link>
                  </li>
                  <li className="servic-left-li">
                    <Link to="/service/meta-ad">
                      <i className="fa-solid fa-circle-check"></i> Meta Ad
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
                src="/media/images/service5.webp"
                alt="Feature"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <h3 className="mb-3 heading">
              Result-Driven Google Ads Campaigns for   <strong>Maximum ROI</strong>
            </h3>

            <p className="mb-3">
              At PPM Infotech, we create high-performing Google Ads campaigns that drive targeted traffic, quality leads, and measurable business growth. Our data-driven advertising strategies ensure your brand appears in front of the right audience at the right time, maximizing return on investment while minimizing wasted ad spend.
            </p>

            <div className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded" style={{ height: "1px" }}></div>

            {/* Services List Section */}
            <div className="servs-list-bx-dsn">
              <h3 className="mb-3 heading">
                Google Ads Services <strong>– A Guide for Beginners</strong>
              </h3>
              <p>
                If you're new to paid advertising, here’s how Google Ads helps grow your business:
              </p>

              <div className="row servic-li-structr">
                <div className="col-md-6">
                  <ul>
                    <li><img src="/media/icons/check.png" alt="check" /> Keyword Research & Competitor Analysis</li>
                    <li><img src="/media/icons/check.png" alt="check-icon" /> Search, Display & Video Campaign Setup</li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5><img src="/media/icons/check.png" alt="check-icon" />Targeted Audience Reach</h5>
                    <p>Google Ads allows precise targeting based on location, demographics, interests, and search behavior, helping your business reach ready-to-buy customers.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li><img src="/media/icons/check.png" alt="check-icon" />Conversion Tracking & Optimization</li>
                    <li><img src="/media/icons/check.png" alt="check-icon" /> Budget Management & ROI Focus</li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5><img src="/media/icons/check.png" alt="Instant Visibility on Google" />Instant Visibility on Google</h5>
                    <p>Unlike SEO, Google Ads provides immediate top-page visibility, driving traffic and leads from day one.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded" style={{ height: "1px" }}></div>

            {/* Cards Section */}
            <div className="seller-details-card-wrap">
              <h3 className="mb-3 heading">
                Google Ads  <strong>with strategy</strong>
              </h3>

              <div className="row g-4 resl-dtls-card-wrap">
                {/* card-1 */}
                <div className="col-sm-6 reseller-details-bx">
                  <div className="reseller-details-card h-100">
                    <div className="hover-lines"></div>
                    <div className="serv-resdtl-card-content">
                      <figure>
                        <img src="/media/icons/adwords.png" alt="adwords icon" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Data-Driven Campaign Execution
                      </h2>

                      <p className="text-light opacity-75">
                        We analyze performance metrics like CTR, CPC, Quality Score, and conversion rate to refine and scale campaigns effectively.
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
                        <img src="/media/icons/adwords.png" alt=" aword icon" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Continuous Testing & Scaling
                      </h2>

                      <p className="text-light opacity-75">
                        Through A/B testing of ad copies, landing pages, and bidding strategies, we ensure consistent improvement and scalable growth.
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