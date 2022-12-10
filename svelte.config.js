import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess as preprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
