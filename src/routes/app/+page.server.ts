import { appwriteCookie } from "$lib/appwrite";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	logout: async ({ cookies, url }) => {
		cookies.delete(appwriteCookie, {
			secure: true,
			httpOnly: true,
			path: '/',
			domain: (url.hostname !== 'localhost' ? '.' : '') + url.hostname,
			// expires: expiry
		});
		throw redirect(307, '/auth');
	}
};
