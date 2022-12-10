import { appwriteEndpoint, appwriteProjectId } from '$lib/appwrite';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch, cookies }) => {
	const userId = url.searchParams.get('userId');
	const secret = url.searchParams.get('secret');

	if (!userId || !secret) {
		throw error(400, {
			message: 'Link is no longer valid.'
		});
	}

	try {
		const request = await fetch(appwriteEndpoint + '/account/sessions/magic-url', {
			method: 'PUT',
			headers: {
				'x-appwrite-project': appwriteProjectId,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userId,
				secret
			})
		});

        if(request.status > 200) {
            throw Error(request.statusText);
        }

		const cookie = (request.headers.get('set-cookie') ?? '')
			.split('.' + appwriteEndpoint)
			.join(url.origin);

        console.log(request.headers.get('set-cookie'));

        // TODO: Set cookies properly
        // cookies.set("")

		throw redirect(307, '/');
	} catch (err: any) {
		throw error(400, {
			message: 'Link is no longer valid: ' + err.message
		});
	}
};
