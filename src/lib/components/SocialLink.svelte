<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		text,
		subtext,
		children
	}: { href: string; text: string; subtext: string; children: Snippet } = $props();
</script>

<a
	{href}
	rel="external"
	target="_blank"
	class="group -ml-3 block grow-0 rounded-lg px-4 py-3 transition-colors hover:bg-bg-1"
>
	<div class="flex items-center gap-4">
		{@render children()}
		<div class="flex flex-col">
			<p class="text-sm text-text-1">
				{subtext}
			</p>
			<p>
				{text}
			</p>
		</div>
	</div>
</a>
