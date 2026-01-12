<script lang="ts">
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>metamethods/{data.frontmatter.title}</title>
	<meta name="description" content={data.frontmatter.description} />
</svelte:head>

<main>
	<article class="mx-auto prose prose-theme">
		<div class="not-prose">
			<h1 class="text-4xl font-black text-primary">{data.frontmatter.title}</h1>
			<p class="text-text-muted">
				{new Date(data.frontmatter.date).toLocaleString('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				})}
			</p>
		</div>

		<div class="mt-4">
			{@render data.content()}
		</div>
	</article>
</main>
