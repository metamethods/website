<script lang="ts">
	import eutThumbnail from '$lib/assets/thumbnails/eut.png';
	import ktpff2Thumbnail from '$lib/assets/thumbnails/ktpff2.png';
	import afnThumbnail from '$lib/assets/thumbnails/afn.png';
	import rexThumbnail from '$lib/assets/thumbnails/rex.png';
	import skyrdenThumbnail from '$lib/assets/thumbnails/skyrden.jpg';
	import CardAnchor from '$lib/components/CardAnchor.svelte';

	interface Contribution {
		thumbnail: string;
		title: string;
		description: string;
		role: string;
		since: string;
		url: string;
	}
</script>

{#snippet ContributionCard(contribution: Contribution)}
	<CardAnchor href={contribution.url} title={contribution.title} class="py-4">
		<article class="flex flex-col gap-4 xl:flex-row">
			<enhanced:img
				src={contribution.thumbnail}
				alt={contribution.title}
				class="aspect-video w-64 rounded-md object-cover"
			/>
			<div>
				<h1 class="text-2xl font-semibold">
					{contribution.title}
				</h1>
				<p class="text-text-muted">{contribution.description}</p>
				<p class="mt-2">
					Contributed as a <span class="font-medium text-primary">{contribution.role}</span>
					since
					<span class="font-medium text-primary">{contribution.since}</span>
				</p>
			</div>
		</article>
	</CardAnchor>
{/snippet}

<div class="mt-4 flex flex-col gap-4">
	{@render ContributionCard({
		thumbnail: eutThumbnail,
		title: 'Everything Upgrade Tree',
		description: 'Silly incremental game',
		role: 'content scripter',
		since: '2025 to now',
		url: 'https://www.roblox.com/games/122809141833750'
	})}

	{@render ContributionCard({
		thumbnail: ktpff2Thumbnail,
		title: 'Keep the Platform From Falling 2',
		description: 'Silly rougelike based strategy game where you keep the platform from falling',
		role: 'general scripter',
		since: '2025 to now',
		url: 'https://www.roblox.com/games/134854458362713'
	})}

	{@render ContributionCard({
		thumbnail: afnThumbnail,
		title: 'Project Afternight',
		description: 'Roblox FNF game',
		role: 'general scripter',
		since: '2025 to now',
		url: 'https://www.roblox.com/games/13042495892'
	})}

	{@render ContributionCard({
		thumbnail: rexThumbnail,
		title: 'REx: Reincarnated',
		description: 'Mining game where you find rare ores',
		role: 'general scripter',
		since: '2024 to now',
		url: 'https://www.roblox.com/games/8549934015'
	})}

	{@render ContributionCard({
		thumbnail: skyrdenThumbnail,
		title: 'Skyrden',
		description: 'A Roblox airline group',
		role: 'general scripter and backend programmer',
		since: '2023 to 2026',
		url: 'https://www.roblox.com/communities/12253448'
	})}
</div>
