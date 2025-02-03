import { useState } from "react";
import { addProduct } from "../../lib/uploadProducts";
import { uploadImage } from "../../lib/uploadImage";

const AdminDashboard = () => {
    const [formData, setFormData] = useState({
        item_name: "",
        item_description: "",
        item_image: "",
        item_price: "",
        item_link: "",
        tags: [],
    });

    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");

    // Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle comma-separated tags input
    const handleTagsChange = (e) => {
        setFormData({
            ...formData,
            tags: e.target.value.split(",").map(tag => tag.trim()), // Convert to an array
        });
    };

    // Handle file selection
    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    // Upload image and update form data
    const handleImageUpload = async () => {
        if (!imageFile) {
            alert("Please select an image first.");
            return;
        }

        setUploading(true);
        try {
            const imageUrl = await uploadImage(imageFile);
            if (imageUrl) {
                setUploadedImageUrl(imageUrl);
                setFormData((prev) => ({ ...prev, item_image: imageUrl }));
            }
        } catch (error) {
            alert("Image upload failed.");
        }
        setUploading(false);
    };

    // Copy URL to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(uploadedImageUrl).then(() => {
            alert("Image URL copied!");
        });
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProduct(formData);
            alert("Product added successfully!");
            setFormData({
                item_name: "",
                item_description: "",
                item_image: "",
                item_price: "",
                item_link: "",
                tags: [],
            });
            setImageFile(null);
            setUploadedImageUrl("");
        } catch (error) {
            alert("Error adding product.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard - Add Product</h2>

            {/* Image Upload Section */}
            <div className="mb-6 p-4 bg-gray-700 rounded-md">
                <h3 className="text-xl font-semibold mb-3">Upload Image</h3>
                <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 text-black rounded-md" />
                <button type="button" onClick={handleImageUpload} disabled={uploading} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                    {uploading ? "Uploading..." : "Upload Image"}
                </button>

                {/* Show uploaded image preview & copy URL button */}
                {uploadedImageUrl && (
                    <div className="mt-4">
                        <img src={uploadedImageUrl} alt="Uploaded Preview" className="w-full h-40 object-cover rounded-md" />
                        <div className="flex items-center mt-2">
                            <input
                                type="text"
                                value={uploadedImageUrl}
                                readOnly
                                className="w-full p-2 text-black rounded-md"
                            />
                            <button
                                onClick={copyToClipboard}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
                            >
                                Copy URL
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Product Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label>
                    Item Name:
                    <input type="text" name="item_name" required value={formData.item_name} onChange={handleChange} className="w-full p-2 mt-1 text-black rounded-md" />
                </label>

                <label>
                    Item Description:
                    <textarea name="item_description" required value={formData.item_description} onChange={handleChange} className="w-full p-2 mt-1 text-black rounded-md"></textarea>
                </label>

                <label>
                    Item Price:
                    <input type="number" name="item_price" required step="0.01" value={formData.item_price} onChange={handleChange} className="w-full p-2 mt-1 text-black rounded-md" />
                </label>

                <label>
                    Item Link:
                    <input type="url" name="item_link" required value={formData.item_link} onChange={handleChange} className="w-full p-2 mt-1 text-black rounded-md" />
                </label>

                <label>
                    Tags (comma separated):
                    <input type="text" name="tags" value={formData.tags.join(", ")} onChange={handleTagsChange} className="w-full p-2 mt-1 text-black rounded-md" />
                </label>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AdminDashboard;
