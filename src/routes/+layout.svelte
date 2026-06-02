<script lang="ts">
	import '@fontsource/plus-jakarta-sans/latin-700';
	import '@fontsource/plus-jakarta-sans/latin-500';
	import '@fontsource/plus-jakarta-sans/latin-400';
	import '@fontsource/plus-jakarta-sans/latin-400-italic';
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	{#if page.data.seo}
		<title>{page.data.seo.title}</title>
		<meta name="og:title" content={page.data.seo.title} />

		{#if page.data.seo.description}
			<meta name="description" content={page.data.seo.description} />
			<meta name="og:description" content={page.data.seo.description} />
		{/if}

		{#if page.data.seo.thumbnail}
			<meta name="og:image" content={page.data.seo.thumbnail.url} />
			<meta name="og:image:alt" content={page.data.seo.thumbnail.alt} />
		{/if}
	{/if}

	<meta name="og:site_name" content="metamethods" />
	<meta name="og:url" content={page.url.href} />

	<meta name="theme-color" content="#e8c5ff" />
</svelte:head>

<div>
	<Header />
</div>

<div class="min-h-screen">
	{@render children()}
</div>

<div>
	<Footer />
</div>
