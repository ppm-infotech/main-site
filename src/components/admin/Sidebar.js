import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = async () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {

      // Remove login time
      localStorage.removeItem("loginTime");

      // Logout from Firebase
      await signOut(auth);

      toast.success("Logged out successfully.");

      navigate("/admin/login", {
        replace: true
      });

    } catch (error) {

      console.error(error);
      toast.error("Logout failed.");

    }

  };

  return (

    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#212529",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column"
      }}
    >

      <div>

        <h4 style={{ color: "#ff5e14" }}>
          Admin Panel
        </h4>

        <hr />

        <ul className="list-unstyled">

          <li className="mb-3">
            <Link
              className="text-white text-decoration-none"
              to="/admin/dashboard"
            >
              Dashboard
            </Link>
          </li>

          <li className="mb-3">
            <Link
              className="text-white text-decoration-none"
              to="/admin/blogs"
            >
              Blogs
            </Link>
          </li>

          <li className="mb-3">
            <Link
              className="text-white text-decoration-none"
              to="/admin/blogs/create"
            >
              Create Blog
            </Link>
          </li>

        </ul>

      </div>

      {/* Logout Button */}

      <button
        onClick={handleLogout}
        className="btn mt-auto admin-logout-btn"
        style={{ color: "#fff", background: "#ff5e14" }}
      >
        Logout
      </button>

    </div>

  );

}

export default Sidebar;