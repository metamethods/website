import type { Snippet } from 'svelte';

export function getPosts(): Record<string, PostFrontmatter> {
	const posts: Record<string, PostFrontmatter> = {};

	for (const [path, post] of Object.entries(
		import.meta.glob('$lib/posts/*.svx', { eager: true }) as Record<
			string,
			{ metadata: PostFrontmatter }
		>
	)) {
		const slug = /^(.*)\..*$/.exec(path.split('/').pop() ?? '')?.[1];

		if (!slug) {
			continue;
		}

		posts[slug] = {
			...post.metadata
		};
	}

	return posts;
}

export function getDateSortedPosts(): Post[] {
	return Object.entries(getPosts())
		.map(([slug, frontmatter]) => {
			return { slug, frontmatter };
		})
		.sort(
			(a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
		);
}

export async function loadPost(
	slug: string
): Promise<{ content: Snippet; frontmatter: PostFrontmatter; thumbnailUrl?: string }> {
	const post = await import(`$lib/posts/${slug}.svx`);

	return {
		content: post.default as Snippet,
		frontmatter: post.metadata as PostFrontmatter
	};
}

export function getNeighboringPosts(currentSlug: string): {
	previous?: Post;
	next?: Post;
} {
	const sorted = getDateSortedPosts();
	const currentIndex = sorted.findIndex((post) => post.slug === currentSlug);

	return {
		previous: sorted[currentIndex - 1],
		next: sorted[currentIndex + 1]
	};
}
