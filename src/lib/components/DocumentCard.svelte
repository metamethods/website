<script lang="ts" generics="M extends BaseDocumentMetadata">
	import { formatDateString } from '$lib/utils/dateUtils';
	import type { BaseDocumentMetadata, Document } from '$lib/documents';
	import type { ResolvedPathname } from '$app/types';
	import type { Picture } from '@sveltejs/enhanced-img';

	let {
		href,
		document,
		thumbnail,
		offset = true
	}: {
		href: ResolvedPathname;
		document: Document<M>;
		thumbnail?: { picture: Picture; alt: string };
		offset?: boolean;
	} = $props();
</script>

<a
	{href}
	class="group relative block {offset
		? '-ml-3'
		: ''} overflow-clip rounded-lg bg-bg-0 px-3 py-2 {!thumbnail
		? 'outline outline-border-0 transition-colors hover:bg-bg-1 hover:outline-bg-1'
		: ''}"
>
	{#if thumbnail}
		<enhanced:img
			src={thumbnail.picture}
			alt={thumbnail.alt}
			class="absolute inset-1/2 w-full -translate-1/2 scale-125 rotate-6 object-cover opacity-15 brightness-50 saturate-50 transition duration-300 ease-out group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-30 group-hover:brightness-100 group-hover:saturate-100"
		/>
	{/if}

	<div class="relative z-10">
		<h1 class="text-2xl font-bold">{document.metadata.title}</h1>
		<p class="font-medium text-text-1">{document.metadata.description}</p>
		<p class="text-right text-text-2 italic">{formatDateString(document.metadata.date)}</p>
	</div>
</a>
