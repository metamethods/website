<script lang="ts">
	import { resolve } from '$app/paths';
	import { getProjectThumbnailPicture } from '$lib/assets/images/thumbnails/projects';
	import type { ProjectDocument } from '$lib/documents/projects';
	// import { formatDateString } from '$lib/utils/dateUtils';
	import TagsList from './TagsList.svelte';

	let {
		document
	}: {
		document: ProjectDocument;
	} = $props();
</script>

<a href={resolve(`/projects/${document.slug}`)} class="group block">
	<enhanced:img
		src={getProjectThumbnailPicture(document.metadata.thumbnails[0].src)}
		alt={document.metadata.thumbnails[0].alt}
		class="rounded-lg outline-0 outline-offset-0 outline-transparent transition-[outline-offset,outline] duration-100 group-hover:outline-2 group-hover:outline-offset-6 group-hover:outline-accent-0"
	/>
	<h1 class="mt-2 text-2xl font-bold">{document.metadata.title}</h1>
	<p class="text-text-1">{document.metadata.description}</p>
	<!-- <p class="text-text-2">{formatDateString(document.metadata.date)}</p> -->
	<div class="mt-2">
		<TagsList tags={document.metadata.tags} />
	</div>
</a>
