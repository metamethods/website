import { getPostThumbnailPicture } from '$lib/assets/images/thumbnails/posts/index.js';
import { postDocumentCollection } from '$lib/documents/posts/index.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const document = postDocumentCollection.collection[params.slug];

	if (!document) {
		return error(404, `post ${params.slug} does not exist`);
	}

	return {
		document,
		neighboringDocuments: postDocumentCollection.getNeighboringDocuments(params.slug),
		seo: {
			title: document.metadata.title,
			description: document.metadata.description,
			thumbnail: document.metadata.thumbnail
				? {
						url: getPostThumbnailPicture(document.metadata.thumbnail.src).img.src,
						alt: document.metadata.thumbnail.alt
					}
				: undefined
		}
	};
}
