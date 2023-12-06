import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	runtime: 'edge',
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		alias: {
			// '$lib' : './src/lib',
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		
		csp: {
			directives: {
				'script-src': ['self', 'https://*.vercel-scripts.com', 'https://*.vercel-insights.com'],
				'connect-src': ['self', 'https://*.vercel-insights.com']
			}
		}
	}
};

export default config;
