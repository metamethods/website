import { dev } from '$app/environment';
import {
	DocumentCollection,
	type BaseDocumentMetadata,
	type Document,
	type DocumentGlobRecordEntry
} from '..';

interface ProjectDocumentMetadata extends BaseDocumentMetadata {
	technologies: string[];
	tags: string[];
	draft: boolean;
	featured: boolean;
	thumbnails: {
		src: string;
		alt: string;
	}[];
	urls: Record<string, string>;
}

export type ProjectDocument = Document<ProjectDocumentMetadata>;

export const projectDocumentCollection = DocumentCollection.fromGlobRecord(
	Object.fromEntries(
		Object.entries(
			import.meta.glob<DocumentGlobRecordEntry<ProjectDocumentMetadata>>(
				'$lib/documents/projects/*.svx',
				{
					eager: true
				}
			)
		).filter((entry) => dev || !entry[1].metadata.draft)
	)
);
