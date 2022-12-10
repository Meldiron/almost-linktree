import { Client, Account, ID } from 'appwrite';

export const appwriteEndpoint = 'https://cloud.appwrite.io/v1';
export const appwriteProjectId = 'almostLinktree';

const client = new Client()
	.setEndpoint(appwriteEndpoint)
	.setProject(appwriteProjectId);

const account = new Account(client);

export class AppwriteService {
	static async login(email: string, hostname: string) {
		return await account.createMagicURLSession(ID.unique(), email, `${hostname}/auth/finish`);
	}

	static async loginFinish(email: string) {}
}
