<script lang="ts">
	import Tag from './Tag.svelte';

	let { tags }: { tags: string[] } = $props();
</script>

<div class="flex flex-wrap gap-2">
	{#each tags as tag, i (i)}
		<Tag {tag} />
	{/each}
</div>
