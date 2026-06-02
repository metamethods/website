import { postDocumentCollection } from '$lib/documents/posts/index.js';

export async function entries() {
	return postDocumentCollection.slugs.map((slug) => ({ slug }));
}

export const prerender = true;
