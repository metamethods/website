<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<div class="flex flex-wrap items-center gap-4 sm:justify-between">
	<div class="flex flex-wrap items-center gap-4">
		<a href={resolve('/')} aria-current={page.url.pathname == '/'}>home</a>
		<a href={resolve('/projects')} aria-current={page.url.pathname == '/projects'}>projects</a>
		<a href={resolve('/posts')} aria-current={page.url.pathname == '/posts'}>posts</a>
	</div>
	<div class="flex flex-wrap items-center gap-4">
		<a href={resolve('/contact')} aria-current={page.url.pathname == '/contact'}>contact</a>
	</div>
</div>

<style>
	@reference "../../routes/layout.css";

	a[aria-current='true'] {
		@apply font-choco-cooky text-2xl text-accent-0;
	}
</style>
