import { getBlogPosts } from '$lib/utils';

export async function load() {
	return {
		posts: await getBlogPosts()
	};
}
