<script lang="ts">
	import Technology from '$lib/components/Technology.svelte';
	import projects from '$lib/projects.json';
	import contributions from '$lib/contributions.json';
	import { Github, Twitter, CloudUpload, Mail } from '@lucide/svelte';
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
				<a
					href="https://github.com/metamethods"
					class="default flex items-center gap-2 rounded-lg px-4 py-3 transition-[background-color] hover:bg-bg"
				>
					<article class="flex items-center gap-2">
						<Github class="w-8" />
						<div class="flex flex-col">
							<p class="text-sm text-text-muted">Github</p>
							<p class="font-medium">metamethods</p>
						</div>
					</article>
				</a>
				<a
					href="https://x.com/__metamethods"
					class="default flex items-center gap-2 rounded-lg px-4 py-3 transition-[background-color] hover:bg-bg"
				>
					<article class="flex items-center gap-2">
						<Twitter class="w-8" />
						<div class="flex flex-col">
							<p class="text-sm text-text-muted">Twitter</p>
							<p class="font-medium">__metamethods</p>
						</div>
					</article>
				</a>
				<a
					href="mailto:tabledmetamethods@gmail.com"
					class="default flex items-center gap-2 rounded-lg px-4 py-3 transition-[background-color] hover:bg-bg"
				>
					<article class="flex items-center gap-2">
						<Mail class="w-8" />
						<div class="flex flex-col">
							<p class="text-sm text-text-muted">mailto</p>
							<p class="font-medium">tabledmetamethods@gmail.com</p>
						</div>
					</article>
				</a>
				<a
					href="https://files.metatable.sh/"
					class="default flex items-center gap-2 rounded-lg px-4 py-3 transition-[background-color] hover:bg-bg"
				>
					<article class="flex items-center gap-2">
						<CloudUpload class="w-8" />
						<div class="flex flex-col">
							<p class="text-sm text-text-muted">files.metatable.sh</p>
							<p class="font-medium">Fileserver</p>
						</div>
					</article>
				</a>
			</div>
		</div>
	</div>
	<div class="col-span-2 flex flex-col gap-16 p-16">
		{#snippet seperator()}
			<div
				class="-ml-[calc((--spacing(16))+(--spacing(16)))] h-px w-[calc(100%+(--spacing(16))+(--spacing(16))+(--spacing(16)))] bg-border-muted"
			></div>
		{/snippet}

		<section>
			<h1 class="text-3xl font-bold text-primary lg:text-4xl">Projects</h1>
			<p class="text-lg font-medium">Some silly projects that I have made</p>
			<div class="mt-4 flex flex-col gap-4">
				{#each projects as project, i (i)}
					<a
						href={project.url}
						target="_blank"
						title={project.title}
						class="default col-auto -ml-4 rounded-lg px-4 pt-3 pb-4 transition-[background-color] hover:bg-bg"
					>
						<article>
							<div class="flex flex-row items-center gap-2">
								{#each project.technologies as technology, i (i)}
									<Technology {technology} class="h-6 w-6" />
								{/each}
								<h1 class="text-lg font-semibold">
									{project.title}
								</h1>
							</div>
							<p class="text-text-muted">{project.description}</p>
						</article>
					</a>
				{/each}

				<a
					href="https://github.com/metamethods"
					class="default -ml-4 rounded-lg px-4 py-3 text-text-muted outline outline-border-muted transition-[background-color] outline-dashed hover:bg-bg hover:outline-transparent"
					target="_blank"
				>
					Find more on my github profile
				</a>
			</div>
		</section>

		{@render seperator()}

		<section>
			<h1 class="text-3xl font-bold text-primary lg:text-4xl">Contributions</h1>
			<p class="text-lg font-medium">Silly things that I have contributed on (or is currently)</p>
			<div class="mt-4 flex flex-col gap-4">
				{#each contributions as contribution, i (i)}
					<a
						href={contribution.url}
						target="_blank"
						title={contribution.title}
						class="default col-auto -ml-4 rounded-lg p-4 transition-[background-color] hover:bg-bg"
					>
						<article class="flex flex-col gap-4 lg:flex-row">
							<img src={contribution.thumbnail} alt={contribution.title} class="w-64 rounded-md" />
							<div class="flex flex-col">
								<h1 class="text-lg font-semibold">
									{contribution.title}
								</h1>
								<p class="text-text-muted">{contribution.description}</p>
								<p>
									Contributed as a <span class="font-medium text-primary">{contribution.role}</span>
									since
									<span class="font-medium text-primary">{contribution.since}</span>
								</p>
							</div>
						</article>
					</a>
				{/each}
			</div>
		</section>

		{@render seperator()}

		<section>
			<h1 class="text-3xl font-bold text-primary lg:text-4xl">Blog Posts</h1>
			<p class="mb-8 text-lg font-medium">Where I share out some silly stuff</p>
			<a
				href="/blog"
				class="default rounded-lg bg-bg px-4 py-3 transition-[background-color] hover:bg-bg-light"
			>
				Check it out
			</a>
		</section>
	</div>
</main>
