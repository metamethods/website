<script lang="ts">
	import Technology from './Technology.svelte';
	import type { ResolvedPathname } from '$app/types';
	import { getProjectThumbnailPicture } from '$lib/assets/images/thumbnails/projects';
	import TagsList from './TagsList.svelte';
	import { formatDate } from '$lib/utils/dateUtils';

	let {
		href,
		title,
		description,
		date,
		technologies,
		tags,
		thumbnail
	}: {
		href: ResolvedPathname;
		title: string;
		description: string;
		date: Date;
		technologies: string[];
		tags: string[];
		thumbnail: {
			src: string;
			alt: string;
		};
	} = $props();
</script>

<a {href} class="-ml-3 block rounded-lg py-3 pr-3 pl-4 transition-colors hover:bg-bg-1">
	<div class="grid-cols-3 gap-4 md:grid">
		<div class="col-span-2 flex flex-col gap-2">
			<div class="mb-2">
				<h1 class="flex items-center gap-2 text-2xl font-bold">
					<span><Technology technology={technologies[0]} class="size-8" /></span>{title}
				</h1>
				<p class="font-medium text-text-2">{formatDate(date)}</p>
				<p class="mt-2 text-text-1">{description}</p>
			</div>

			{#if technologies.length > 1}
				<div class="flex flex-wrap gap-2">
					{#each technologies.slice(1) as technology (technology)}
						<Technology {technology} class="size-6" />
					{/each}
				</div>
			{/if}

			{#if tags.length > 0}
				<TagsList {tags} />
			{/if}
		</div>
		<enhanced:img
			src={getProjectThumbnailPicture(thumbnail.src)}
			alt={thumbnail.alt}
			class="col-span-1 hidden w-full rounded-md border border-border-0 md:block"
		/>
	</div>
</a>
