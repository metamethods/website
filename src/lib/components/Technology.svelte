<script lang="ts">
	import Luau from '$lib/icons/Luau.svelte';
	import Rust from '$lib/icons/Rust.svelte';
	import Typescript from '$lib/icons/Typescript.svelte';

	let { technology, class: className = '' }: { technology: string; class?: string } = $props();
</script>

{#if technology == 'luau'}
	<Luau class={className} />
{:else if technology == 'rust'}
	<Rust class={className} />
{:else if technology == 'typescript'}
	<Typescript class={className} />
{/if}
