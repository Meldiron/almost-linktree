import { fail } from '@sveltejs/kit';
import { AppwriteService } from '$lib/appwrite';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, url }) => {
		const data = await request.formData();
		const email = data.get('email') ?? '';

		try {
			await AppwriteService.login(email.toString(), url.origin);
		} catch (err: any) {
			return fail(400, { success: false, message: 'Cannot send sign-in mail: ' + err.message });
		}

		return { success: true };
	}
};
