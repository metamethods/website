<script lang="ts">
	import { getProjectThumbnailPicture } from '$lib/assets/images/thumbnails/projects';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import DocumentHeader from '$lib/components/DocumentHeader.svelte';
	import useEmblaCarousel from 'embla-carousel-svelte';
	import type { PageProps } from './$types';
	import TagsList from '$lib/components/TagsList.svelte';

	const { data }: PageProps = $props();
</script>

<main>
	<article class="mx-auto max-w-5xl px-12 pb-8">
		<div>
			<DocumentHeader
				title={data.document.metadata.title}
				description={data.document.metadata.description}
				date={data.document.metadata.date}
				readTime={data.document.metadata.readTime}
			/>
			{#if data.document.metadata.tags.length > 0}
				<div class="mt-2">
					<TagsList tags={data.document.metadata.tags} />
				</div>
			{/if}
			<div class="mt-2 flex gap-4">
				{#each Object.entries(data.document.metadata.urls) as [name, href], i (i)}
					<a {href} rel="external" target="_blank" class="flex items-center gap-1"
						>{name} <span><ArrowUpRight class="size-4" /></span></a
					>
				{/each}
			</div>
		</div>

		{#if data.document.metadata.thumbnails.length === 1}
			<enhanced:img
				src={getProjectThumbnailPicture(data.document.metadata.thumbnails[0].src)}
				alt={data.document.metadata.thumbnails[0].alt}
				class="mt-8 w-full rounded-xl"
			/>
		{:else}
			<div class="mt-8" use:useEmblaCarousel>
				<div class=" flex touch-pan-y touch-pinch-zoom gap-16">
					{#each data.document.metadata.thumbnails as thumbnail, i (i)}
						<div class="min-w-0 flex-[0_0_100%]">
							<enhanced:img
								src={getProjectThumbnailPicture(thumbnail.src)}
								alt={thumbnail.alt}
								class="w-full rounded-xl"
							/>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div class="prose mt-8 max-w-none prose-theme">
			{@render data.document.content()}
		</div>
	</article>
</main>
