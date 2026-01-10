<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto min-h-screen w-full max-w-7xl p-6">
	{@render children()}
</div>
