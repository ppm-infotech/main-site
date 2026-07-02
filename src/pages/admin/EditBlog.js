import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TiptapEditor from "../../components/admin/TiptapEditor";
import { getBlog, updateBlog } from "../../firebase/blogService";
import { uploadImageToCloudinary } from "../../services/cloudinary";
import { toast } from "react-toastify";


function EditBlog() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const loadBlog = async () => {

      const blog = await getBlog(id);

      if (!blog) {
        toast.error("Blog not found.");
        return;
      }

      setTitle(blog.title || "");
      setSlug(blog.slug || "");
      setMetaTitle(blog.metaTitle || "");
      setMetaDescription(blog.metaDescription || "");
      setMetaKeywords(blog.metaKeywords || "");
      setDescription(blog.description || "");
      setImagePreview(blog.imageUrl || "");

    };

    loadBlog();

  }, [id]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };



  const uploadImage = async () => {
    if (!image) return imagePreview;
    return await uploadImageToCloudinary(image);
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      setLoading(true);
      const imageUrl = await uploadImage();
      await updateBlog(id, {
        title,
        slug,
        metaTitle,
        metaDescription,
        metaKeywords,
        description,
        imageUrl
      });
      toast.success("Blog updated successfully!");
      navigate("/admin/blogs");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update blog.");
    } finally {
      setLoading(false);
    }
  };



  return (

    <div className="container-fluid">
      <h3 className="mb-4">Edit Blog</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Blog Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Slug</label>
          <input
            type="text"
            className="form-control"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Meta Title</label>
          <input
            type="text"
            className="form-control"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Meta Description</label>
          <textarea
            rows="3"
            className="form-control"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Meta Keywords</label>
          <input
            type="text"
            className="form-control"
            value={metaKeywords}
            onChange={(e) => setMetaKeywords(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Featured Image
          </label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />

          {
            imagePreview && (

              <div className="mt-3">
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: "250px",
                    borderRadius: "10px"
                  }}
                />
              </div>

            )
          }

        </div>

        <div className="mb-3">
          <label className="form-label">
            Blog Content
          </label>

          <TiptapEditor
            value={description}
            onChange={setDescription}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
              ></span>

              Updating...
            </>
          ) : (
            "Update Blog"
          )}
        </button>

      </form>
    </div>
  );
}

export default EditBlog;