import { dev } from '$app/environment';
import {
	DocumentCollection,
	type BaseDocumentMetadata,
	type Document,
	type DocumentGlobRecordEntry
} from '..';

interface PostDocumentMetadata extends BaseDocumentMetadata {
	draft: boolean;
	thumbnail?: {
		src: string;
		alt: string;
	};
}

export type PostDocument = Document<PostDocumentMetadata>;

export const postDocumentCollection = DocumentCollection.fromGlobRecord(
	Object.fromEntries(
		Object.entries(
			import.meta.glob<DocumentGlobRecordEntry<PostDocumentMetadata>>(
				'$lib/documents/posts/*.svx',
				{
					eager: true
				}
			)
		).filter((entry) => dev || !entry[1].metadata.draft)
	)
);
