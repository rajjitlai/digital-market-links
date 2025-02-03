import { useState } from "react";

const AdminDashboard = () => {
    const [formData, setFormData] = useState({
        item_name: "",
        item_description: "",
        item_image: "",
        item_price: "",
        item_link: "",
        tags: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTagsChange = (e) => {
        setFormData({
            ...formData,
            tags: e.target.value.split(",").map(tag => tag.trim()),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard - Add Item</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="block">
                    Item Name:
                    <input
                        type="text"
                        name="item_name"
                        required
                        value={formData.item_name}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 text-black rounded-md"
                    />
                </label>

                <label className="block">
                    Item Description:
                    <textarea
                        name="item_description"
                        required
                        value={formData.item_description}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 text-black rounded-md"
                    />
                </label>

                <label className="block">
                    Item Image URL:
                    <input
                        type="url"
                        name="item_image"
                        required
                        value={formData.item_image}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 text-black rounded-md"
                    />
                </label>

                <label className="block">
                    Item Price:
                    <input
                        type="number"
                        name="item_price"
                        required
                        step="0.01"
                        value={formData.item_price}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 text-black rounded-md"
                    />
                </label>

                <label className="block">
                    Item Link:
                    <input
                        type="url"
                        name="item_link"
                        required
                        value={formData.item_link}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 text-black rounded-md"
                    />
                </label>

                <label className="block">
                    Tags (comma separated):
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags.join(", ")}
                        onChange={handleTagsChange}
                        className="w-full p-2 mt-1 text-black rounded-md"
                    />
                </label>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AdminDashboard;
