<script lang="ts">
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<main>
	<h1 class="text-4xl font-bold">Blog</h1>
	<p class="text-lg font-medium">
		Welcome to my blog. You will most likely find some small things that I feel like sharing to the
		public. You can find the <a href="/blog.atom" target="_blank">atom feed here</a> for any reason whatsoever
	</p>

	<div class="mt-4 flex flex-col gap-2">
		{#each data.posts.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		}) as post (post.slug)}
			<BlogPostCard {post} />
		{/each}
	</div>
</main>
