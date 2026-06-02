<script>
	import PostDocumentCard from '$lib/components/PostDocumentCard.svelte';
	import { postDocumentCollection } from '$lib/documents/posts';
	import CenterLayout from '$lib/layouts/CenterLayout.svelte';
</script>

<svelte:head>
	<title>posts</title>
	<meta name="description" content="all of my currently published posts" />
</svelte:head>

<main>
	<CenterLayout class="flex flex-col gap-8">
		<div>
			<h1 class="font-choco-cooky text-5xl">historical view of all my posts i've created</h1>
			<p class="text-text-1">if you wana read any past things or whatever lol</p>
		</div>

		<div class="flex flex-col gap-2">
			{#each postDocumentCollection.dateSortedDocuments as document, i (i)}
				<PostDocumentCard {document} />
			{/each}
		</div>
	</CenterLayout>
</main>
