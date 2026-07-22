import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs, deleteBlog } from "../../firebase/blogService.js";
import { toast } from "react-toastify";

function BlogList() {

  const [blogs, setBlogs] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };



  // Delete Blog Function
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    try {
      setDeletingId(id);
      await deleteBlog(id);
      toast.success("Blog deleted successfully.");
      loadBlogs();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete blog.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container-fluid">

      <h3 className="mb-4">All Blogs</h3>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Created Date</th>
            <th width="180">Action</th>
          </tr>
        </thead>

        <tbody>

          {blogs.map((blog) => (

            <tr key={blog.id}>

              <td>{blog.title}</td>

              <td>
                {blog.createdAt
                  ? blog.createdAt.toDate().toLocaleDateString()
                  : "No Date"}
              </td>

              <td>

                <Link to={`/admin/blogs/edit/${blog.id}`} className="btn btn-primary btn-sm me-2" >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  disabled={deletingId === blog.id}
                  onClick={() => handleDelete(blog.id)}
                >
                  {deletingId === blog.id ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-1"></span>
                      Deleting...
                    </>
                  ) : (
                    "Delete"
                  )}
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BlogList;