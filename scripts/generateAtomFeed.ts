import remarkFrontmatter from 'remark-frontmatter';
import remarkParseFrontmatter from 'remark-parse-frontmatter';
import { remark } from 'remark';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { Feed } from 'feed';

const BLOG_POSTS_DIRECTORY = './src/lib/blog/posts';
const OUTPUT_FILE_PATH = './static/blog.atom';
const BASE_URL = 'https://metatable.sh';
const AUTHOR = {
	name: 'metamethods',
	email: 'tabledmetamethods@gmail.com',
	link: 'https://github.com/metamethods'
};

interface BlogPostFrontmatter {
	title: string;
	description: string;
	date: string;
}

const feed = new Feed({
	title: "metamethods' blog",
	description: 'silly shenangians',
	id: BASE_URL,
	link: BASE_URL,
	language: 'en',
	copyright: `Copyright metamethods ${new Date().getFullYear()}`,
	feedLinks: {
		atom: `${BASE_URL}/blog.atom`
	},
	author: AUTHOR
});

for (const fileName of await readdir(BLOG_POSTS_DIRECTORY)) {
	const parsedFrontmatter = await remark()
		.use(remarkFrontmatter, ['toml', 'yaml'])
		.use(remarkParseFrontmatter)
		.process(await readFile(`${BLOG_POSTS_DIRECTORY}/${fileName}`));
	const frontmatter = parsedFrontmatter.data.frontmatter as BlogPostFrontmatter;
	const slug = fileName.replace('svx', '');

	feed.addItem({
		title: frontmatter.title,
		id: slug,
		link: `${BASE_URL}/blog/${slug}`,
		description: frontmatter.description,
		author: [AUTHOR],
		date: new Date(frontmatter.date)
	});
}

await writeFile(OUTPUT_FILE_PATH, feed.atom1());
