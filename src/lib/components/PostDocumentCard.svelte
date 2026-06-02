<script lang="ts">
	import { resolve } from '$app/paths';
	import { getPostThumbnailPicture } from '$lib/assets/images/thumbnails/posts';
	import type { PostDocument } from '$lib/documents/posts';
	import DocumentCard from './DocumentCard.svelte';

	let { document, offset }: { document: PostDocument; offset?: boolean } = $props();
</script>

{#if document.metadata.thumbnail}
	<DocumentCard
		href={resolve(`/posts/${document.slug}`)}
		{document}
		thumbnail={{
			picture: getPostThumbnailPicture(document.metadata.thumbnail.src),
			alt: document.metadata.thumbnail.alt
		}}
		{offset}
	/>
{:else}
	<DocumentCard href={resolve(`/posts/${document.slug}`)} {document} {offset} />
{/if}
