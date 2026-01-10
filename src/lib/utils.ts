export async function getBlogPosts(): Promise<(BlogPostFrontmatter & { slug: string })[]> {
	const posts = [];

	for (const [path, post] of Object.entries(
		import.meta.glob('$lib/blog/posts/*.svx', { eager: true }) as Record<
			string,
			{ metadata: BlogPostFrontmatter }
		>
	)) {
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (!slug) {
			continue;
		}

		posts.push({
			slug,
			...post.metadata
		});
	}

	return posts;
}
