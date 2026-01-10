import { error } from '@sveltejs/kit';
import type { Snippet } from 'svelte';

export async function load({ params }) {
	try {
		const post = await import(`$lib/blog/posts/${params.slug}.svx`);

		return {
			content: post.default as Snippet,
			frontmatter: post.metadata as BlogPostFrontmatter
		};
	} catch {
		return error(404, 'Not Found');
	}
}
