import SEO from "../../components/SEO.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config.js";
import PageHeader from "../../components/PageHeader.js";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const fetchBlog = async () => {

      const querySnapshot = await getDocs(collection(db, "blogs"));

      const blogList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setBlogs(blogList); // store all blogs

      const foundBlog = blogList.find(
        b => b.slug === slug
      );

      setBlog(foundBlog);
    };

    fetchBlog();

  }, [slug]);

  if (!blog) return <h2>Loading...</h2>;

  // Create Recent Blogs 
  const recentBlogs = blogs
    .filter(b => b.id !== blog?.id)
    .slice(0, 4); // show 4 recent

  return (
    <>
      {/* Meta Start */}
      <SEO
        title={`${blog.metaTitle} | PPM Infotech Blog`}
        description={blog.metaDescription}
        keywords={blog.metaKeywords}
        canonical={`https://ppminfotech.com/blog/${slug}`}
      />
      {/* Meta End  */}

      <div className="blog-bredcum"><PageHeader title={blog.title} /></div>

      <section className="single-blog-section py-5">
        <div className="container">
          <div className="row">

            {/* left side */}
            <div className="col-lg-9 col-md-12 col-12">
              <div className="single-blog">
                <img src={blog.imageUrl} alt={blog.title} loading="lazy" />
                <h2 className="main-title-left mt-3">{blog.title}</h2>

                <div className="Blog-Content" dangerouslySetInnerHTML={{ __html: blog.description }} ></div>
              </div>
            </div>

            {/* right side */}
            <div className="col-lg-3 col-md-12 col-12">
              <div className="recent-blogs">
                <h4>Recent Blogs</h4>

                {recentBlogs.map((item) => {
                  // const blogSlug = item.title.toLowerCase().replace(/\s+/g, "-");
                  const blogSlug = item.slug;

                  return (
                    <div key={item.id} className="recent-blog-item mb-3">
                      <Link to={`/blog/${blogSlug}`} className="d-flex">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          width="80"
                          height="60"
                          style={{ objectFit: "cover", marginRight: "10px" }}
                        />
                        <p>{item.title}</p>
                      </Link>
                    </div>
                  );
                })}
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
        </div>
      </section>

    </>

  )
}
