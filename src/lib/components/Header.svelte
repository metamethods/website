<script>
	import logo from '$lib/assets/logo.svg';
	import { resolve } from '$app/paths';
</script>

<div class="flex h-full items-center justify-between">
	<div>
		<a href={resolve('/')}>
			<img src={logo} alt="metamethods" class="size-8" />
		</a>
	</div>
	<div></div>
	<nav class="flex gap-2">
		<a
			class="default rounded-lg px-3 py-2 transition-[background-color] hover:bg-bg-1"
			href={resolve('/')}>Home</a
		>
		<a
			class="default rounded-lg px-3 py-2 transition-[background-color] hover:bg-bg-1"
			href={resolve('/blog')}>Blog</a
		>
	</nav>
</div>
