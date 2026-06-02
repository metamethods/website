<script>
	import avatar from '$lib/assets/images/avatar.png?w=600&enhanced';
	import eutThumbnail from '$lib/assets/images/thumbnails/contributions/eut.webp?w=200&enhanced';
	import ktpff2Thumbnail from '$lib/assets/images/thumbnails/contributions/ktpff2.webp?w=200&enhanced';
	import pafnThumbnail from '$lib/assets/images/thumbnails/contributions/pafn.webp?w=200&enhanced';
	import rexThumbnail from '$lib/assets/images/thumbnails/contributions/rex.webp?w=200&enhanced';
	import skyrdenThumbnail from '$lib/assets/images/thumbnails/contributions/skyrden.webp?w=200&enhanced';
	import CenterLayout from '$lib/layouts/CenterLayout.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ContributionCard from '$lib/components/ContributionCard.svelte';
	import WatermarkSection from '$lib/components/WatermarkSection.svelte';
	import PostDocumentCard from '$lib/components/PostDocumentCard.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { resolve } from '$app/paths';
	import { postDocumentCollection } from '$lib/documents/posts';
	import { projectDocumentCollection } from '$lib/documents/projects';
	import WebBadges from '$lib/components/WebBadges.svelte';

	const recentPostDocuments = postDocumentCollection.dateSortedDocuments.slice(0, 3);
	const recentFeaturedProjectDocuments = projectDocumentCollection.dateSortedDocuments
		.filter((document) => document.metadata.featured)
		.slice(0, 3);
</script>

<svelte:head>
	<title>metamethods</title>
	<meta name="description" content="a silly programmer from the states" />
</svelte:head>

<main>
	<CenterLayout class="flex flex-col gap-64 lg:gap-32">
		<section class="flex justify-between">
			<div>
				<h1 class="font-choco-cooky text-4xl md:text-5xl">
					hi, i'm <span class="text-accent-0">metamethods</span>
				</h1>
				<p class="mt-1 text-lg text-text-1">a silly programmer from the states</p>
				<div class="mt-4 flex flex-col gap-2">
					<SocialLink href="https://github.com/metamethods" text="metamethods" subtext="github">
						<Github class="size-8 fill-text-0" />
					</SocialLink>
					<SocialLink
						href="https://twitter.com/__metamethods"
						text="__metamethods"
						subtext="twitter"
					>
						<Twitter class="size-8 fill-text-0" />
					</SocialLink>
				</div>
			</div>
			<div class="hidden md:block">
				<enhanced:img
					src={avatar}
					alt="profile avatar"
					class="size-48 rounded-4xl sm:block lg:size-72"
					fetchpriority="high"
				/>
			</div>
		</section>

		<section class="flex grid-cols-5 flex-col gap-6 lg:grid lg:gap-16">
			<div class="col-span-2">
				<h1 class="font-choco-cooky text-4xl">who the hell am i?</h1>
				<p class="text-text-1">sum stranger idk</p>
			</div>
			<div class="col-span-3">
				<p>
					im <span class="text-accent-0">metamethods</span>, or meta most of the time. im currently
					a student in california studying computer science; actively trying to create new things
					that can either benefit myself or others. i mostly do fullstack and game development
					currently. i also dabble in ui designing too, albeit not the greatest at that haha. aside
					from the boring stuff, i also play a variety of games: blue archive, maimai, and arcaea
					just to name a few
				</p>
			</div>
		</section>

		<!-- <section class="flex grid-cols-5 flex-col gap-6 lg:grid lg:gap-16">
			<div class="col-span-2">
				<h1 class="font-choco-cooky text-4xl">computering things</h1>
				<p class="text-text-1">get an idea of what i can do</p>
			</div>
			<div>
				<p>stub</p>
			</div>
		</section> -->

		<section class="flex grid-cols-5 flex-col gap-6 lg:grid lg:gap-16">
			<div class="col-span-2">
				<h1 class="font-choco-cooky text-4xl">talk is cheap, show me yer cool* things</h1>
				<p class="text-text-1">*what I think thats cool</p>
			</div>
			<div class="col-span-3 flex flex-col gap-2">
				{#each recentFeaturedProjectDocuments as document, i (i)}
					<ProjectCard
						href={resolve(`/projects/${document.slug}`)}
						title={document.metadata.title}
						description={document.metadata.description}
						date={new Date(document.metadata.date)}
						technologies={document.metadata.technologies}
						tags={document.metadata.tags}
						thumbnail={document.metadata.thumbnails[0]}
					/>
				{/each}
				<a
					href={resolve('/projects')}
					class="group -ml-3 flex items-center gap-2 rounded-lg border-2 border-dashed border-border-0 p-4 transition-colors hover:border-solid hover:border-bg-1 hover:bg-bg-1"
				>
					want to see more? <span
						><ArrowRight
							class="size-5 translate-x-2 opacity-0 transition-[opacity,translate] group-hover:translate-x-0 group-hover:opacity-100"
						/></span
					>
				</a>
			</div>
		</section>

		<section class="flex grid-cols-5 flex-col gap-6 lg:grid lg:gap-16">
			<div class="col-span-2">
				<h1 class="font-choco-cooky text-4xl">who do you work for</h1>
				<p class="text-text-1">
					some of the things that i worked on; providing my work journey over time
				</p>
			</div>
			<div class="col-span-3 flex flex-col gap-8 lg:gap-24">
				<WatermarkSection text="2025">
					<div class="flex flex-col gap-4">
						<ContributionCard
							href="https://www.roblox.com/games/122809141833750"
							title="everything upgrade tree"
							role="general scripter"
							description="an incremental game"
							tags={['roblox']}
							thumbnail={eutThumbnail}
						/>
						<ContributionCard
							href="https://www.roblox.com/games/122809141833750"
							title="keep the platform from falling"
							role="general scripter"
							description="silly rougelike based strategy game where you keep the platform from falling"
							tags={['roblox']}
							thumbnail={ktpff2Thumbnail}
						/>
						<ContributionCard
							href="https://www.roblox.com/games/13042495892"
							title="project afternight"
							role="general scripter and ui designer"
							description="roblox fnf game"
							tags={['roblox']}
							thumbnail={pafnThumbnail}
						/>
					</div>
				</WatermarkSection>
				<WatermarkSection text="2024">
					<div class="flex flex-col gap-4">
						<ContributionCard
							href="https://www.roblox.com/games/8549934015"
							title="rex reincarnated"
							role="general scripter and bot developer"
							description="a mining game where you find rare ores"
							tags={['roblox', 'discord']}
							thumbnail={rexThumbnail}
						/>
					</div>
				</WatermarkSection>
				<WatermarkSection text="2023">
					<div class="flex flex-col gap-4">
						<ContributionCard
							href="https://www.roblox.com/communities/12253448"
							title="skyrden airlines"
							role="backend programmer"
							description="a roblox airline group"
							tags={['roblox', 'website', 'discord']}
							thumbnail={skyrdenThumbnail}
						/>
					</div>
				</WatermarkSection>
			</div>
		</section>

		<section class="flex grid-cols-5 flex-col gap-6 lg:grid lg:gap-16">
			<div class="col-span-2">
				<h1 class="font-choco-cooky text-4xl">those who speak</h1>
				<p class="text-text-1">recent documents i've uploaded that you can view</p>
			</div>
			<div class="col-span-3 flex flex-col gap-2">
				{#each recentPostDocuments as document, i (i)}
					<PostDocumentCard {document} />
				{/each}
				<a
					href={resolve('/posts')}
					class="group -ml-3 flex items-center gap-2 rounded-lg border-2 border-dashed border-border-0 p-4 transition-colors hover:border-solid hover:border-bg-1 hover:bg-bg-1"
				>
					looking for more posts? <span
						><ArrowRight
							class="size-5 translate-x-2 opacity-0 transition-[opacity,translate] group-hover:translate-x-0 group-hover:opacity-100"
						/></span
					>
				</a>
			</div>
		</section>

		<div><WebBadges /></div>
	</CenterLayout>
</main>
