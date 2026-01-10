import { getBlogPosts } from '$lib/utils';

export async function entries() {
	return (await getBlogPosts()).map((post) => {
		return {
			slug: post.slug
		};
	});
}

export const prerender = true;
