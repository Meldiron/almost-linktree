import { AppwriteService } from '$lib/appwrite';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const actions: Actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const linkId = data.get('linkId') ?? '';
		try {
			await AppwriteService.deleteLink(linkId.toString());
		} catch (err: any) {
			return fail(400, { success: false, message: 'Cannot delete link: ' + err.message });
		}

		throw redirect(307, '/app/links');
	},
	update: async ({ request }) => {
		const data = await request.formData();
		const profileId = data.get('profileId') ?? '';
		const linkId = data.get('linkId') ?? '';
		const text = data.get('text') ?? '';
		const url = data.get('url') ?? '';
		const type = data.get('type') ?? '';

		try {
			await AppwriteService.updateLink(linkId.toString(), {
				text,
				url,
				type,
				profileId
			});
		} catch (err: any) {
			return fail(400, { success: false, message: 'Cannot update link: ' + err.message });
		}

		throw redirect(307, '/app/links');
	}
};

export const load: PageServerLoad = async ({ parent, params }) => {
	const { profile } = await parent();

	if (!profile) {
		throw error(400, { message: 'Please fill your profile in "Settings".' });
	}

	try {
		const link = await AppwriteService.getLink(params.linkId);

		return {
			link
		};
	} catch (err: any) {
		throw error(400, { message: 'Cannot load link: ' + err.message });
	}
};
