<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';
	import TagsList from './TagsList.svelte';

	let {
		href,
		title,
		role,
		description,
		tags,
		thumbnail
	}: {
		href: string;
		title: string;
		role: string;
		description: string;
		tags: string[];
		thumbnail: Picture;
	} = $props();
</script>

<a
	{href}
	rel="external"
	target="_blank"
	class="-ml-3 block rounded-lg bg-bg-0 py-3 pr-3 pl-4 transition-colors hover:bg-bg-1"
>
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3 flex flex-col gap-2 md:col-span-2">
			<div class="mb-2">
				<h1 class="flex items-center gap-2 text-2xl font-bold">
					{title}
				</h1>
				<p class="font-medium text-text-2">{role}</p>
				<p class="mt-2 text-text-1">{description}</p>
			</div>

			{#if tags.length > 0}
				<TagsList {tags} />
			{/if}
		</div>
		<enhanced:img
			src={thumbnail}
			alt={`${title} thumbnail`}
			class="col-span-1 hidden w-full rounded-md border border-border-0 md:block"
		/>
	</div>
</a>
