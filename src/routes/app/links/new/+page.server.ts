import { AppwriteService } from '$lib/appwrite';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const profileId = data.get('profileId') ?? '';
		const text = data.get('text') ?? '';
		const url = data.get('url') ?? '';
		const type = data.get('type') ?? '';

		try {
			await AppwriteService.createLink({
				text,
				url,
				type,
				profileId
			});
		} catch (err: any) {
			return fail(400, { success: false, message: 'Cannot create link: ' + err.message });
		}

		throw redirect(307, '/app/links');
	}
};
