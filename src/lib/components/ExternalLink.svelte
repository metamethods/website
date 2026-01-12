<script lang="ts">
	import CardAnchor from '$lib/components/CardAnchor.svelte';
	import type { Component } from 'svelte';

	const {
		url,
		target,
		text,
		Icon
	}: { url: string; target: string; text: string; Icon: Component<{ class?: string }> } = $props();
</script>

<CardAnchor href={url} title={target}>
	<article class="flex items-center gap-4">
		<Icon class="size-6" />
		<div class="flex flex-col">
			<h1 class="text-sm text-text-muted">{target}</h1>
			<p class="font-medium">{text}</p>
		</div>
	</article>
</CardAnchor>
