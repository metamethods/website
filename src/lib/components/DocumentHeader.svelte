<script lang="ts">
	import { formatDateString } from '$lib/utils/dateUtils';

	let {
		title,
		description,
		date: dateString,
		readTime
	}: { title: string; description: string; date: string; readTime: string } = $props();
</script>

<div>
	<h1 class="font-choco-cooky text-5xl">
		{title}
	</h1>
	<p class="font-medium text-text-1">
		{formatDateString(dateString)} <span class="mx-2">-</span>
		{readTime}
	</p>
	<p class="mt-2 text-text-2 italic">{description}</p>
</div>
