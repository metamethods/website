<script lang="ts">
	import type { Snippet } from 'svelte';

	let { text, children }: { text: string; children: Snippet } = $props();
</script>

<div class="relative pt-16 lg:pt-0">
	<p
		class="pointer-events-none absolute -z-10 -translate-y-3/5 font-choco-cooky text-[6rem] text-bg-2 select-none lg:-translate-x-3/5 lg:-rotate-6 lg:text-[10rem]"
	>
		{text}
	</p>

	{@render children()}
</div>
