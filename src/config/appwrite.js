import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

export const database = new Databases(client, import.meta.VITE_APP_DB)
export const account = new Account(client)

export const prodBuck = new Storage(client, import.meta.VITE_APP_PROD_BUCK)

client.setEndpoint(import.meta.env.VITE_APP_ENDPOINT).setProject(import.meta.env.VITE_APP_ID);

export { ID } from "appwrite"

export default client;