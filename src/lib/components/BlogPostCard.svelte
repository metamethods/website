<script lang="ts">
	const { post }: { post: BlogPostFrontmatter & { slug: string } } = $props();
</script>

<a
	href="/blog/{post.slug}"
	aria-label={post.title}
	class="default col-auto -ml-4 rounded-lg px-4 pt-3 pb-4 transition-[background-color] hover:bg-bg"
>
	<article>
		<h1 class="text-lg font-semibold">{post.title}</h1>
		<p class="text-text-muted">{post.description}</p>
		<p class="text-text-muted italic">
			{new Date(post.date).toLocaleString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			})}
		</p>
	</article>
</a>
