<script>
	import Svelte from '$lib/icons/Svelte.svelte';
	import CenterLayout from '$lib/layouts/CenterLayout.svelte';
</script>

<div class="outline outline-border-0">
	<CenterLayout class="flex justify-between">
		<div></div>
		<div>
			<p class="font-choco-cooky text-xl">
				made with love by me, <span class="text-accent-0">meta</span>!
			</p>
			<p class="flex items-center gap-1 font-choco-cooky text-xl text-text-1">
				built with the help of
				<a href="https://svelte.dev/" class="flex items-center text-icon-svelte"
					><span><Svelte class="size-5 fill-icon-svelte" /></span>veltekit</a
				>
			</p>
		</div>
	</CenterLayout>
</div>
