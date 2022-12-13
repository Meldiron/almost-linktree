import { AppwriteService } from '$lib/appwrite';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { profile } = await parent();

	if (!profile) {
		throw error(400, { message: 'Please fill your profile in "Settings".' });
	}

	try {
		const links = await AppwriteService.getLinks(profile.$id);

		return {
			links
		};
	} catch (err: any) {
		throw error(400, { message: 'Cannot load links: ' + err.message });
	}
};
