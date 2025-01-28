import { Client, Databases, Account, Storage } from "appwrite";

const client = new Client();

export const database = new Databases(client, import.meta.env.VITE_APP_DB);
export const account = new Account(client)

export const productBuck = new Storage(client, import.meta.env.VITE_APP_PRODUCT_BUCK)

client
    .setEndpoint(import.meta.env.VITE_APP_EP)
    .setProject(import.meta.env.VITE_APP_ID);

export { ID, OAuthProvider } from "appwrite";