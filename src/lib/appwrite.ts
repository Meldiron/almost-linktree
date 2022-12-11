import { Client, Account, ID } from 'appwrite';

export const appwriteEndpoint = 'https://cloud.appwrite.io/v1';
export const appwriteProjectId = 'almostLinktree';
export const appwriteCookie = `a_session_${appwriteProjectId.toLowerCase()}_legacy`;
export const appwriteCookieJson = `a_session_${appwriteProjectId}`;

const client = new Client().setEndpoint(appwriteEndpoint).setProject(appwriteProjectId);

const account = new Account(client);

export class AppwriteService {
	static setSSRAuth(cookie: string) {
		const authCookies: any = {};
		authCookies[appwriteCookieJson] = cookie;
		client.headers['X-Fallback-Cookies'] = JSON.stringify(authCookies);
	}

	static async login(email: string, hostname: string) {
		return await account.createMagicURLSession(ID.unique(), email, `${hostname}/auth/finish`);
	}

	static async getAccount() {
		return await account.get();
	}
}
