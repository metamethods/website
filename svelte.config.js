import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { bundledLanguages, getSingletonHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highligher = await getSingletonHighlighter({
						themes: ['catppuccin-mocha', 'catppuccin-latte'],
						langs: Object.keys(bundledLanguages)
					});
					const html = escapeSvelte(
						highligher.codeToHtml(code, {
							lang,
							themes: {
								light: 'catppuccin-latte',
								dark: 'catppuccin-mocha'
							}
						})
					);
					return `{@html \`${html}\` }`;
				}
			}
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx']
};

export default config;
