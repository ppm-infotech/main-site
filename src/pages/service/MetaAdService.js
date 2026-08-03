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
        keywords="Meta Ads Services in Bhubaneswar"
        title='Best Meta Ads Services in Bhubaneswar | PPM Infotech'
        description="Boost your business with Meta Ads services in Bhubaneswar from PPM Infotech. We create and optimize Facebook and Instagram ad campaigns for better leads and ROI."
        canonical='https://ppminfotech.com/service/meta-ad'
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
                src="/media/images/service6.jpg"
                alt="Feature"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <h3 className="mb-3 heading">
              High-Converting Meta Ads Campaigns for <strong>Facebook & Instagram Growth</strong>
            </h3>

            <p className="mb-3">
              At PPM Infotech, we design and manage performance-driven Meta Ads campaigns across Facebook and Instagram to generate quality leads, increase brand awareness, and drive measurable sales growth. Our strategic approach ensures your ads reach the right audience with the right message at the right time — maximizing ROI and minimizing ad spend waste.
            </p>

            <div className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded" style={{ height: "1px" }}></div>

            {/* Services List Section */}
            <div className="servs-list-bx-dsn">
              <h3 className="mb-3 heading">
                Meta Ads Services <strong>– A Guide for Beginners</strong>
              </h3>
              <p>
                If you're new to paid social advertising, here’s how Meta Ads can grow your business:
              </p>

              <div className="row servic-li-structr">
                <div className="col-md-6">
                  <ul>
                    <li><img src="/media/icons/check.png" alt="check" /> Audience Research & Advanced Targeting</li>
                    <li><img src="/media/icons/check.png" alt="check-icon" /> Creative Ad Design & Copywriting</li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5><img src="/media/icons/check.png" alt="check-icon" />Scalable Brand Growth</h5>
                    <p>With proper strategy and creative testing, Meta Ads can scale businesses rapidly by reaching millions of active users.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li><img src="/media/icons/check.png" alt="check-icon" />Lead Generation & Conversion Campaigns</li>
                    <li><img src="/media/icons/check.png" alt="check-icon" /> Performance Monitoring & Optimization</li>
                  </ul>

                  <div className="servic-feature-card mt-4">
                    <h5><img src="/media/icons/check.png" alt="Audience Targeting" />Precision Audience Targeting</h5>
                    <p>Meta Ads allow detailed audience segmentation, helping businesses connect with potential customers based on real-time interests and behavior.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 bg-secondary opacity-25 mt-5 mb-3 rounded" style={{ height: "1px" }}></div>

            {/* Cards Section */}
            <div className="seller-details-card-wrap">
              <h3 className="mb-3 heading">
                Meta Ads  <strong>with strategy</strong>
              </h3>

              <div className="row g-4 resl-dtls-card-wrap">
                {/* card-1 */}
                <div className="col-sm-6 reseller-details-bx">
                  <div className="reseller-details-card h-100">
                    <div className="hover-lines"></div>
                    <div className="serv-resdtl-card-content">
                      <figure>
                        <img src="/media/icons/adwords.png" alt=" Data-Driven Advertising Approach" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Data-Driven Advertising Approach
                      </h2>

                      <p className="text-light opacity-75">
                        We analyze campaign metrics such as engagement rate, cost per result, ROAS, and conversion tracking to continuously improve ad performance.
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
                        <img src="/media/icons/adwords.png" alt=" Funnel-Based Marketing" />
                      </figure>

                      <h2 className="fs-4 fw-bold text-white mb-3">
                        Funnel-Based Marketing Strategy
                      </h2>

                      <p className="text-light opacity-75">
                        We design awareness, consideration, and conversion campaigns to guide customers through a structured sales funnel for maximum profitability.
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