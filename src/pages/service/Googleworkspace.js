import ButtonComponent from "../../components/button";
import InquaryForm from "../../components/InquaryForm";
import PageHeader from "../../components/PageHeader";
import { ServiceFCard } from "./MSOffice365";
import SEO from "../../components/SEO";

export default function Googleworkspace() {
  return (
    <>

      {/* Meta Start */}
      <SEO
        keywords=" Google Workspace Services in Bhubaneswar"
        title='Google Workspace Services in Bhubaneswar | PPM Infotech'
        description="Simplify business communication with Google Workspace services from PPM Infotech. Get professional setup, migration, support, and secure collaboration solutions." 
        canonical='https://ppminfotech.com/service/google-workspace'
      />
      {/* Meta End  */}
      
      <PageHeader />
      {/* price section  */}
      <section className="price-section py-5">
        <div className="container-fluid">
          {/* Title row  */}
          <div className="row">
            {/* <span className="sub-title-left text-center">Price Table</span> */}
            <h3 className="mb-5 service-main-heading heading text-center">
              <strong>Google Workspace</strong> Solutions for Businesses
            </h3>
          </div>

          {/* price row  */}
          <div className="row price-area mt-4 price-card-col-4">

            {/* Premium Plan */}
            <div className="pricing-card">

              <h4 className="title">Microsoft 365 Business Premium</h4>
              <span className="pricing-beg">
                Save up to 10%
              </span>

              <hr />

              <ul className="price-feature-list py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  30 GB pooled storage per person
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Secure custom business email
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Gemini AI assistant in Gmail
                </li>
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Chat with AI in the Gemini app
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Video meetings, 100 participants
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Google Vids AI-powered video creator and editor
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Security and management controls
                </li>

              </ul>

              <ButtonComponent name={"Contact Us"} path={"/contact"} className={"price-btn"} />
            </div>

            {/* Standard Plan */}
            <div className="pricing-card">
              <h4 className="title">Standard</h4>
              <span className="pricing-beg">
                Save up to 10%
              </span>

              <hr />

              <ul className="price-feature-list py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  2 TB 65x more than Starter*
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Secure custom business email (+ custom layouts and mail merge)
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Gemini AI assistant in Gmail, Docs, Meet, and more
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  NotebookLM with expanded access to features
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Chat with AI in the Gemini app with expanded access to models and features
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  Video meetings with recording, noise cancellation, 150 participants
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Appointment booking pages
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  eSignature with Docs and PDFs
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  Google Workspace Migrate tool for data migration
                </li>
              </ul>

              <ButtonComponent name={"Contact Us"} path={"/contact  "} />
            </div>

            {/* Basic Plan */}
            <div className="pricing-card">
              <h4 className="title">Plus</h4>

              <span className="pricing-beg">
                Save up to 10%
              </span>

              <hr />

              <ul className="price-feature-list py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  5 TB 2.5x more than Standard*
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Secure custom business email + eDiscovery
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Video meetings with attendance tracking, 500 participants
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Vault to retain, archive, and search data
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Secure LDAP
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Advanced endpoint management
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  Enhanced security and management controls
                </li>

              </ul>

              <ButtonComponent name={"Contact Us"} path={"/contact  "} />
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <h4 className="title">Enterprise</h4>

              <span className="pricing-beg">
                Save up to 10%
              </span>

              <hr />

              <ul className="price-feature-list py-3">
                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  5 TB or upgrade for more*
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Secure custom business email + S/MIME encryption
                </li>

                <li className="active">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Video meetings with in-domain live streaming, 1000 participants
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Data loss prevention (DLP)
                </li>

                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Context-aware access
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2 available"></i>
                  Enterprise data regions
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  Cloud Identity Premium
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  Enterprise endpoint management
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  AI Classification for Google Drive
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  Assured Controls & AI Classification available add-on
                </li>
                <li className="inactive">
                  <i className="fa-regular fa-circle-check me-2  available"></i>
                  Enhanced Support for faster response times for critical issues
                </li>

              </ul>

              <ButtonComponent name={"Contact Us"} path={"/contact  "} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature section  */}
      <section className="service-feture-full-row py-5 mb-5">
        <div className="container">
          {/* Title row  */}
          <div className="row">
            {/* <span className="sub-title-left text-center">Price Table</span> */}
            <h3 className="mb-3 service-main-heading heading text-center">
              <strong>Apps to fit</strong> for your business
            </h3>
          </div>

          <div className="row mt-4">
            <ServiceFCard
              name="Business Email"
              descp="Get a professional domain-based email (you@yourcompany.com) with advanced spam protection, security, and seamless access across all devices."
              icon="/media/icons/gmail.png"
            />

            <ServiceFCard
              name="Google Drive Cloud Storage"
              descp="Secure cloud storage with real-time file sharing, access control, and team collaboration from anywhere."
              icon="/media/icons/google-drive.png"
            />

            <ServiceFCard
              name="Google Meet & Chat"
              descp="Conduct HD video meetings, team messaging, and real-time collaboration to improve communication and remote productivity."
              icon="/media/icons/meet.png"
            />

            <ServiceFCard
              name="Docs, Sheets & Slides"
              descp="Create, edit, and collaborate on documents, spreadsheets, and presentations in real-time with automatic cloud saving."
              icon="/media/icons/googleDoc.svg"
            />

            <ServiceFCard
              name="Admin & Security Management"
              descp="Advanced admin controls, user management, data protection, and security policies to safeguard your business information."
              icon="/media/icons/googleSec.svg"
            />

            <ServiceFCard
              name="Business Scheduling Solution"
              descp="Streamline your business scheduling with Google Calendar. Easily manage meetings, appointments, reminders, and team events with real-time syncing."
              icon="/media/icons/google-calendar.png"
            />

          </div>
        </div>
      </section>

      <InquaryForm />
    </>
  );
}
