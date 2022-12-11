import { appwriteCookie } from "$lib/appwrite";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete(appwriteCookie);
		throw redirect(307, '/auth');
	}
};
