import { AppwriteService } from '$lib/appwrite';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	try {
		const profile = await AppwriteService.getProfileBySlug(params.slug);

		if (!profile) {
			throw new Error('Profile not found.');
		}

		const links = await AppwriteService.getLinks(profile.$id);

		return {
			profile,
			links
		};
	} catch (err: any) {
		throw error(400, { message: 'Cannot load Linktree: ' + err.message });
	}
};
