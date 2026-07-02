import { useState } from "react";
import TiptapEditor from "../../components/admin/TiptapEditor.js";
// import { storage } from "../../firebase/config";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uploadImageToCloudinary } from "../../services/cloudinary";
import { createBlog } from "../../firebase/blogService";
import { serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";



function CreateBlog() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Image Upload to Cloudinary
  const uploadImage = async () => {
    if (!image) return "";
    const imageUrl = await uploadImageToCloudinary(image);
    return imageUrl;
  };

  // Form Submit 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Upload image to Cloudinary
      const imageUrl = await uploadImage();

      // Save blog in Firestore
      await createBlog({
        title,
        slug,
        metaTitle,
        metaDescription,
        metaKeywords,
        description,
        imageUrl,
        createdAt: serverTimestamp()
      });

      toast.success("Blog Published Successfully!");

      // Clear form
      setTitle("");
      setSlug("");
      setMetaTitle("");
      setMetaDescription("");
      setMetaKeywords("");
      setDescription("");
      setImage(null);
      setImagePreview("");

    } catch (error) {
      console.error(error);
      toast.error("Failed to publish blog");
    } finally {
      setLoading(false);
    }
  };





  return (

    <div className="container-fluid">
      <h3 className="mb-4">Create Blog</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Slug
          </label>
          <input
            type="text"
            className="form-control"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Meta Title
          </label>
          <input
            type="text"
            className="form-control"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Meta Description
          </label>
          <textarea
            className="form-control"
            rows="3"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Meta Keywords
          </label>
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
              <div className="mb-3">
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
          {/* <button
            type="button"
            className="btn btn-success mt-3"
            onClick={async () => {
              console.log("Image:", image);
              const url = await uploadImage();
              console.log("URL:", url);
              alert("Blog Image URL: "+ url);
            }}
          >
            Upload Image
          </button> */}
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

              Publishing...
            </>
          ) : (
            "Publish Blog"
          )}
        </button>
      </form>
    </div>
  );

}

export default CreateBlog;