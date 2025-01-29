import { useEffect, useState } from 'react';
import { account } from '../config/appwrite';
import { logoutUser } from '../func';

const Home = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await account.get();
                setUser(userData);
            } catch (error) {
                console.error("User not logged in", error);
            }
            setLoading(false);
        };

        fetchUser();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Welcome to My Website!</h1>
            {user ? <p>Logged in as {user.name}</p> : <p>Please log in to continue.</p>}
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
};

export default Home;
