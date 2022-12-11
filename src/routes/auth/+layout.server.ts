import { appwriteCookie } from "$lib/appwrite";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
	const authCookie = cookies.get(appwriteCookie);

	if (authCookie) {
		throw redirect(307, '/app');
	}
};