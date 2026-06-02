<script>
	let { children, class: className = '', classPadding = 'p-12' } = $props();
</script>

<div class="mx-auto w-full max-w-7xl {classPadding} {className}">
	{@render children()}
</div>
