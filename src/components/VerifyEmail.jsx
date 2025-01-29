import React, { useEffect } from 'react'
import { account } from '../config/appwrite'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const verifyEmail = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const userId = urlParams.get('userId')
    const secret = urlParams.get('secret')

    try {
        if (userId && secret) {
            await account.updateVerification(userId, secret)
            toast.success("Email verified successfully. Redirecting...")
        } else {
            toast.error("Invalid verification link.")
        }
    } catch (error) {
        toast.error("Failed to verify email.")
    }
}

const VerifyEmail = () => {
    const navigate = useNavigate()
    useEffect(() => {
        verifyEmail().then(() => [
            setTimeout(() => navigate('/'), 3000)
        ]);
    }, [navigate])

    return (
        <div>
            <p>Verifying</p>
        </div>
    )
}

export default VerifyEmail