import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#212529",
        color: "#fff",
        padding: "20px"
      }}
    >
      <h4 style={{color: "#ff5e14"}}>Admin Panel</h4>
      <hr />

      <ul className="list-unstyled">

        <li className="mb-3">
          <Link className="text-white text-decoration-none" to="/admin/dashboard">
            Dashboard
          </Link>
        </li>

        <li className="mb-3">
          <Link className="text-white text-decoration-none" to="/admin/blogs">
            Blogs
          </Link>
        </li>

        <li className="mb-3">
          <Link className="text-white text-decoration-none" to="/admin/blogs/create">
            Create Blog
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;