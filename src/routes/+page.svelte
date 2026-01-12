<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import Projects from './Projects.svelte';
	import Contributions from './Contributions.svelte';
	import { Github, Twitter, Mail, BookOpen } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	// force enhance thumbnail images
	import.meta.glob('/src/lib/assets/thumbnails/*.{png,jpg}', {
		eager: true,
		query: {
			enhanced: true
		}
	});
</script>

<svelte:head>
	<meta name="description" content="Hiya! Im metamethods" />
</svelte:head>

<main class="flex flex-col divide-y divide-border lg:grid lg:grid-cols-3 lg:divide-x">
	<div class="col-span-1">
		<div
			class="-mt-(--header-height) flex flex-col gap-16 px-16 pt-[calc(var(--header-height)+(--spacing(16)))] pb-16 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto"
		>
			<section>
				<h1 class="text-3xl font-bold lg:text-4xl">
					<span class="text-primary">meta</span>methods
				</h1>
				<p class="text-lg font-medium">
					A US based full stack developer who enjoys too many rhythm games
				</p>
			</section>
			<div class="mt-auto flex flex-col gap-2">
				<ExternalLink
					url={resolve('/blog/about')}
					target="/blog/about"
					text="About Me"
					Icon={BookOpen}
				/>
				<ExternalLink
					url="https://github.com/metamethods"
					target="Github"
					text="metamethods"
					Icon={Github}
				/>
				<ExternalLink
					url="https://x.com/__metamethods"
					target="Twitter"
					text="__metamethods"
					Icon={Twitter}
				/>
				<ExternalLink
					url="mailto:tabledmetamethods@gmail.com"
					target="mailto"
					text="meta@metatable.sh"
					Icon={Mail}
				/>
			</div>
		</div>
	</div>

	<div class="col-span-2 flex flex-col gap-16 p-16">
		{#snippet seperator()}
			<div
				class="-ml-[calc((--spacing(16))+(--spacing(16)))] h-px w-[calc(100%+(--spacing(16))+(--spacing(16))+(--spacing(16)))] bg-border"
			></div>
		{/snippet}

		<section>
			<h1 class="text-3xl font-bold text-primary lg:text-4xl">Projects</h1>
			<p class="mb-4 text-lg font-medium">Some silly projects that I have made</p>
			<Projects />
		</section>

		{@render seperator()}

		<section>
			<h1 class="text-3xl font-bold text-primary lg:text-4xl">Contributions</h1>
			<p class="mb-4 text-lg font-medium">
				Silly things that I have contributed on (or is currently)
			</p>
			<Contributions />
		</section>

		{@render seperator()}

		<section>
			<h1 class="text-3xl font-bold text-primary lg:text-4xl">Blog Posts</h1>
			<p class="mb-8 text-lg font-medium">Where I share out some silly stuff</p>
			<a
				href={resolve('/blog')}
				class="default rounded-lg bg-bg-1 px-4 py-3 transition-[background-color] hover:bg-bg-2"
			>
				Check it out
			</a>
		</section>
	</div>
</main>
