import { getProjectThumbnailPicture } from '$lib/assets/images/thumbnails/projects/index.js';
import { projectDocumentCollection } from '$lib/documents/projects';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const document = projectDocumentCollection.collection[params.slug];

	if (!document) {
		return error(404, `project ${params.slug} does not exist`);
	}

	return {
		document,
		neighboringDocuments: projectDocumentCollection.getNeighboringDocuments(params.slug),
		seo: {
			title: document.metadata.title,
			description: document.metadata.description,
			thumbnail: {
				url: getProjectThumbnailPicture(document.metadata.thumbnails[0].src).img.src,
				alt: document.metadata.thumbnails[0].alt
			}
		}
	};
}
