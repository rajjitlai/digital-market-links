import { useEffect, useState } from "react";
import { getContacts } from "../../lib/getContacts";

const ContactMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            const data = await getContacts();
            setMessages(data);
            setLoading(false);
        };

        fetchMessages();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Messages</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading messages...</p>
            ) : messages.length === 0 ? (
                <p className="text-center text-gray-500">No messages found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-gray-800">
                                <th className="border p-3">Name</th>
                                <th className="border p-3">Email</th>
                                <th className="border p-3">Subject</th>
                                <th className="border p-3">Message</th>
                                <th className="border p-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((msg) => (
                                <tr key={msg.$id} className="hover:bg-gray-100 transition">
                                    <td className="border p-3">{msg.name}</td>
                                    <td className="border p-3">{msg.email}</td>
                                    <td className="border p-3">{msg.subject}</td>
                                    <td className="border p-3">{msg.message}</td>
                                    <td className="border p-3 text-sm text-gray-500">
                                        {new Date(msg.$createdAt).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ContactMessages;
