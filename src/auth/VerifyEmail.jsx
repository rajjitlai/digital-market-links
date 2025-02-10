import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { account } from "../config/appwrite";

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const secret = searchParams.get("secret");
        const userId = searchParams.get("userId");

        if (secret && userId) {
            account.updateVerification(userId, secret)
                .then(() => {
                    alert("Email verified successfully!");
                    navigate("/login");
                })
                .catch((error) => {
                    console.error("Verification failed:", error);
                    alert("Verification failed. Please try again.");
                });
        }
    }, [searchParams, navigate]);

    return <div>Verifying your email...</div>;
};

export default VerifyEmail;
