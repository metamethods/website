<script lang="ts">
	import { resolve } from '$app/paths';
	import CardAnchor from '$lib/components/CardAnchor.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<main>
	<h1 class="text-4xl font-bold">Blog</h1>
	<p class="text-lg font-medium">
		Welcome to my blog. You will most likely find some small things that I feel like sharing to the
		public. You can find the <a href="/blog.atom" rel="external" target="_blank">atom feed here</a> for
		any reason whatsoever
	</p>

	<div class="mt-4 flex flex-col gap-2">
		{#each data.posts.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		}) as post (post.slug)}
			<CardAnchor href={resolve(`/blog/${post.slug}`)} title={post.title}>
				<article>
					<h1 class="text-2xl font-semibold">{post.title}</h1>
					<p class="text-text-muted">{post.description}</p>
					<p class="mt-2 text-text-muted italic">
						{new Date(post.date).toLocaleString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric'
						})}
					</p>
				</article>
			</CardAnchor>
		{/each}
	</div>
</main>
