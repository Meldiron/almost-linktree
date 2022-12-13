import { Client, Account, ID, Databases, Query, type Models } from 'appwrite';

export const appwriteEndpoint = 'https://backend.linktree.almostapps.eu/v1';
export const appwriteProjectId = 'almostLinktree';
export const appwriteCookie = `a_session_${appwriteProjectId.toLowerCase()}_legacy`;
export const appwriteCookieJson = `a_session_${appwriteProjectId}`;

const client = new Client().setEndpoint(appwriteEndpoint).setProject(appwriteProjectId);

export type Profile = {
	slug: string;
	name: string;
	bio: string;
	userId: string;
} & Models.Document;

export type Link = {
	text: string;
	url: string;
	type: string;
	profileId: string;
} & Models.Document;

const account = new Account(client);
const databases = new Databases(client);

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

	static async getProfile(userId: string) {
		const docs = await databases.listDocuments<Profile>('main', 'profiles', [
			Query.limit(1),
			Query.equal('userId', userId),
			Query.orderAsc('$createdAt')
		]);

		return docs.documents.length <= 0 ? null : docs.documents[0];
	}

	static async getProfileBySlug(slug: string) {
		const docs = await databases.listDocuments<Profile>('main', 'profiles', [
			Query.limit(1),
			Query.equal('slug', slug),
			Query.orderAsc('$createdAt')
		]);

		return docs.documents.length <= 0 ? null : docs.documents[0];
	}

	static async updateProfile(newDoc: any, profileId: string | null = null) {
		if (profileId) {
			return await databases.updateDocument('main', 'profiles', profileId, newDoc);
		} else {
			return await databases.createDocument('main', 'profiles', ID.unique(), newDoc);
		}
	}

	static async createLink(newDoc: any) {
		return await databases.createDocument('main', 'links', ID.unique(), newDoc);
	}

	static async updateLink(linkId: string, newDoc: any) {
		return await databases.updateDocument('main', 'links', linkId, newDoc);
	}

	static async getLink(linkId: string) {
		return await databases.getDocument('main', 'links', linkId);
	}

	static async deleteLink(linkId: string) {
		return await databases.deleteDocument('main', 'links', linkId);
	}

	static async getLinks(profileId: string) {
		return await databases.listDocuments<Link>('main', 'links', [
			Query.equal('profileId', profileId)
		]);
	}
}

// TODO: Function: Delete profiles document if not owned by userId (create event)
// TODO: Function Delete links document if now owned by profileId (userId) (create event)
