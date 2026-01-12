<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		href,
		title,
		class: className = '',
		children
	}: {
		href: string;
		title: string;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<a
	{href}
	{title}
	class="default -ml-4 rounded-lg px-4 py-3 transition-[background-color] hover:bg-bg-1 {className}"
	rel="external"
>
	<!-- kinda forced to use external to silence the stupid ass lint error -->
	{@render children()}
</a>
