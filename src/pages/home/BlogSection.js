import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import '../../styles/singleblog.css';


export default function BlogSection() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const querySnapshot = await getDocs(collection(db, "blogs"));

            const blogList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setBlogs(blogList);
        };

        fetchBlogs();
    }, []);

    return (
        <section className='blog-sec py-5'>
            <div className='container'>
                <div className='row'>
                    <span className='sub-title-left text-center'>Weekly Updates</span>
                    <h2 className='main-title-left text-center'>Our Latest Updates</h2>
                </div>
                <div className='row mt-5'>

                    {/* 3 blog card rendering/fetch from firebase  */}

                    {blogs.slice(0, 3).map(blog => (

                        <div className="blog-card col-lg-4 col-md-4 col-12 mb-4" key={blog.id} >
                            {/* Image */}
                            <div className="blog-img position-relative">
                                <img src={blog.imageUrl} alt={blog.title} loading="lazy" />
                                <span className="blog-badge">Solution</span>
                            </div>
                            {/* Content */}
                            <div className="blog-content">
                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="title"
                                >
                                    <h4>{blog.title}</h4>
                                </Link>
                            </div>

                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}
