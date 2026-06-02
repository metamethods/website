import { projectDocumentCollection } from '$lib/documents/projects';

export async function entries() {
	return projectDocumentCollection.slugs.map((slug) => ({ slug }));
}

export const prerender = true;
