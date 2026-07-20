import { useEffect, useState } from "react";
import { getBlogs } from "../../firebase/blogService";

function Dashboard() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const latestBlog =
    blogs.length > 0
      ? blogs.sort(
        (a, b) =>
          b.createdAt?.seconds - a.createdAt?.seconds
      )[0]
      : null;

  const loginTime = localStorage.getItem("loginTime");
  const formattedLoginTime = loginTime
    ? new Date(Number(loginTime)).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    : "-";
  return (

    <div className="container-fluid">

      <h3 className="mb-4">
        Dashboard
      </h3>

      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow" style={{ height: "200px" }}>
            <div className="card-body">
              <h6>Total Blogs</h6>
              <h2>{blogs.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow " style={{ height: "200px" }}>
            <div className="card-body">
              <h6>Latest Blog</h6>
              <p className="mb-0">
                {latestBlog
                  ? latestBlog.title
                  : "No Blog"}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow" style={{ height: "200px" }}>
            <div className="card-body">
              <h6>Last Published Time</h6>
              <p>{latestBlog?.createdAt?.toDate().toLocaleString() || "-"}</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow" style={{ height: "200px" }}>
            <div className="card-body">
              <h6>Last Login Time</h6>
              <p>{formattedLoginTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;