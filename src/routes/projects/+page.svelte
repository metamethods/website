<script>
	import LargeProjectCard from '$lib/components/LargeProjectCard.svelte';
	import { projectDocumentCollection } from '$lib/documents/projects';
</script>

<svelte:head>
	<title>projects</title>
	<meta
		name="description"
		content="list of all the projects that i, myself, have created, and or worked on with someone else"
	/>
</svelte:head>

<main
	class="grid max-w-full grid-cols-1 gap-8 px-12 py-8 sm:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))]"
>
	{#each projectDocumentCollection.dateSortedDocuments as document, i (i)}
		<LargeProjectCard {document} />
	{/each}
</main>
