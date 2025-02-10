const VerifyPrompt = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-2xl font-semibold">Verify Your Email</h1>
            <p className="text-gray-600 mt-2">Please check your email and click the verification link to activate your account.</p>
            <a href="/login" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Go to Login</a>
        </div>
    );
};

export default VerifyPrompt;
