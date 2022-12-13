import { AppwriteService } from '$lib/appwrite';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const userId = data.get('userId') ?? '';
		const profileId = data.get('profileId');
		const slug = data.get('slug') ?? '';
		const name = data.get('name') ?? '';
		const bio = data.get('bio') ?? '';

		try {
			await AppwriteService.updateProfile(
				{
					slug,
					name,
					bio,
					userId
				},
				profileId ? profileId.toString() : null
			);
		} catch (err: any) {
			return fail(400, { success: false, message: 'Cannot update settings: ' + err.message });
		}

		return { success: true };
	}
};
