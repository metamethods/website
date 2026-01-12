<script lang="ts">
	import '@fontsource-variable/plus-jakarta-sans';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	{#if page.url.pathname == '/'}
		<title>metamethods</title>
	{:else}
		<title>metamethods/{page.url.pathname.split('/').at(-1)}</title>
	{/if}

	<link rel="icon" href={favicon} />
</svelte:head>

<header class="sticky inset-0 z-10 bg-bg-0 outline-1 outline-border">
	<div class="mx-auto h-(--header-height) max-w-7xl px-6">
		<Header />
	</div>
</header>

{@render children()}

<footer class="bg-bg-0 outline-1 outline-border">
	<div class="mx-auto max-w-7xl p-6">
		<Footer />
	</div>
</footer>
