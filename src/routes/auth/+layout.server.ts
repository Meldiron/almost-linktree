import { appwriteCookie } from "$lib/appwrite";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
	const authCookie = cookies.get(appwriteCookie);

	if (authCookie) {
		throw redirect(307, '/app');
	}
};