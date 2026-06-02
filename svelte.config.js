import { mdsvex } from 'mdsvex';
import { toString } from 'mdast-util-to-string';
import readingTime from 'reading-time';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
		experimental: {
			async: true
		}
	},
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			precompress: true
		})
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [
				() => (tree, file) => {
					const content = toString(tree);
					const stats = readingTime(content);

					if (!file.data.fm) {
						file.data.fm = {};
					}

					file.data.fm.readTime = stats.text;
				}
			]
		})
	],
	extensions: ['.svelte', '.svx']
};

export default config;
