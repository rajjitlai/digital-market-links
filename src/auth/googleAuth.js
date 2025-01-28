import { account, OAuthProvider } from "../config/appwriteConfig"

export const loginWithGoogle = async () => {
    try {
        await account.createOAuth2Session(OAuthProvider.Google)
    } catch (error) {
        console.error(error)
    }
}

export const logoutUser = async () => {
    try {
        await account.deleteSession('current')
    } catch (error) {
        console.error(error)
    }
}

export const getUser = async () => {
    try {
        return await account.get()
    } catch (error) {
        console.error(error)
    }
}

