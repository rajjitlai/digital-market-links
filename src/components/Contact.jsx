import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="container px-8 lg:px-16 pt-16 mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section - Contact Info */}
                <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-center">
                    <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
                    <p className="text-gray-600 mb-6">
                        Feel free to reach out to us. We are available for any inquiries or support.
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                        <FaPhone className="text-primary text-2xl" />
                        <span className="text-lg">+1 234 567 890</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <FaEnvelope className="text-primary text-2xl" />
                        <span className="text-lg">contact@example.com</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-primary text-2xl" />
                        <span className="text-lg">123 Street, City, Country</span>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h4 className="text-2xl font-semibold mb-6">Send Us a Message</h4>

                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* Subject */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter subject"
                            />
                            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border rounded h-32"
                                placeholder="Enter your message"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
