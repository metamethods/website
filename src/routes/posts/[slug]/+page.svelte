<script lang="ts">
	import { getPostThumbnailPicture } from '$lib/assets/images/thumbnails/posts';
	import DocumentHeader from '$lib/components/DocumentHeader.svelte';
	import PostDocumentCard from '$lib/components/PostDocumentCard.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<main>
	<article class="mx-auto max-w-5xl px-12 pb-8">
		{#if data.document.metadata.thumbnail}
			<enhanced:img
				src={getPostThumbnailPicture(data.document.metadata.thumbnail.src)}
				alt={data.document.metadata.thumbnail.alt}
				class="w-full rounded-t-xl mask-linear-[0deg,transparent_0%,black_100%] opacity-50"
			/>
		{/if}

		<div class="mt-8">
			<DocumentHeader
				title={data.document.metadata.title}
				description={data.document.metadata.description}
				date={data.document.metadata.date}
				readTime={data.document.metadata.readTime}
			/>
		</div>

		<div class="prose mt-8 max-w-none prose-theme">
			{@render data.document.content()}
		</div>

		<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
			<div>
				{#if data.neighboringDocuments.previous}
					<PostDocumentCard document={data.neighboringDocuments.previous} offset={false} />
				{/if}
			</div>
			<div>
				{#if data.neighboringDocuments.next}
					<PostDocumentCard document={data.neighboringDocuments.next} offset={false} />
				{/if}
			</div>
		</div>
	</article>
</main>
