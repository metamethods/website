import type { Snippet } from 'svelte';

export interface BaseDocumentMetadata {
	title: string;
	description: string;
	date: string;
	readTime: string;
}

export interface Document<M extends BaseDocumentMetadata> {
	slug: string;
	content: Snippet;
	metadata: M;
}

export type DocumentGlobRecordEntry<M extends BaseDocumentMetadata> = {
	default: Snippet;
	metadata: M;
};

export class DocumentCollection<M extends BaseDocumentMetadata> {
	public slugs: string[];
	public documents: Document<M>[];
	public dateSortedDocuments: Document<M>[];

	constructor(public collection: Record<string, Document<M>>) {
		this.slugs = Object.keys(collection);
		this.documents = Object.values(collection);
		this.dateSortedDocuments = this.documents.toSorted(
			(a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
		);
	}

	public static fromGlobRecord<M extends BaseDocumentMetadata>(
		globRecord: Record<string, { default: Snippet; metadata: M }>
	): DocumentCollection<M> {
		const documents: Record<string, Document<M>> = {};

		for (const [importPath, document] of Object.entries(globRecord)) {
			const slug = importPath.split('/').pop()?.replace('.svx', '');

			if (!slug) {
				continue;
			}

			documents[slug] = {
				slug,
				content: document.default,
				metadata: document.metadata
			};
		}

		return new DocumentCollection<M>(documents);
	}

	public getNeighboringDocuments(currentDocumentSlug: string): {
		previous?: Document<M>;
		next?: Document<M>;
	} {
		const currentIndex = this.dateSortedDocuments.findIndex(
			(document) => document.slug === currentDocumentSlug
		);

		if (!currentDocumentSlug) {
			return {};
		} else {
			return {
				previous: this.dateSortedDocuments[currentIndex + 1],
				next: this.dateSortedDocuments[currentIndex - 1]
			};
		}
	}
}
