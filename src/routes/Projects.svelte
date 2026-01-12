<script lang="ts">
	import CardAnchor from '$lib/components/CardAnchor.svelte';
	import Technology from '$lib/components/Technology.svelte';

	interface Project {
		title: string;
		description: string;
		technologies: string[];
		url: string;
	}
</script>

{#snippet ProjectCard(project: Project)}
	<CardAnchor href={project.url} title={project.title}>
		<article>
			<div class="flex flex-row items-center gap-2">
				{#each project.technologies as technology, i (i)}
					<Technology {technology} class="size-6" />
				{/each}
				<h1 class="text-2xl font-semibold">
					{project.title}
				</h1>
			</div>
			<p class="text-text-muted">{project.description}</p>
		</article>
	</CardAnchor>
{/snippet}

<div class="flex flex-col gap-4">
	{@render ProjectCard({
		title: 'Hoshi',
		description: 'A silly little image processing Discord bot written in rust',
		technologies: ['rust'],
		url: 'https://github.com/metamethods/hoshi'
	})}

	{@render ProjectCard({
		title: 'Yukiotoko Redesigned',
		description: 'A frontend overhaul for yukiotoko - a Chunithm Online Battle service',
		technologies: ['typescript'],
		url: 'https://github.com/metamethods/yukiotoko-redesigned'
	})}

	{@render ProjectCard({
		title: 'Starlight',
		description: 'Roblox asset library plugin with advanced collections',
		technologies: ['luau'],
		url: 'https://github.com/MrrowLabs/starlight'
	})}

	{@render ProjectCard({
		title: 'Arc',
		description: 'Roblox VFX format test suite plugin. Successor of Fuse',
		technologies: ['luau'],
		url: 'https://github.com/metamethods/arc'
	})}

	{@render ProjectCard({
		title: '5nletters',
		description: 'A bluesky bot which generates 2-5 letter long words',
		technologies: ['typescript'],
		url: 'https://github.com/metamethods/rand_letters'
	})}

	{@render ProjectCard({
		title: 'Therapy',
		description:
			'Roblox plugin featuring a spinning cube of curated images. Perfect tool to cure your bordem while creating in Roblox!',
		technologies: ['luau'],
		url: 'https://github.com/metamethods/therapy'
	})}

	<CardAnchor
		href="https://github.com/metamethods"
		title="github"
		class="outline outline-border outline-dashed hover:outline-bg-1 hover:outline-solid"
	>
		<p>Find more on my github profile</p>
	</CardAnchor>
</div>
