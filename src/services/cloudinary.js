export const uploadImageToCloudinary = async (image) => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "blog_images");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/uujny9s2/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await response.json();

    return data.secure_url;
};