import type { Picture } from '@sveltejs/enhanced-img';

const projectThumbnailsGlob = import.meta.glob<Picture>(
	'$lib/assets/images/thumbnails/projects/**/*.webp',
	{
		query: '?w=1500&enhanced',
		import: 'default',
		eager: true
	}
);

export function getProjectThumbnailPicture(filename: string): Picture {
	return projectThumbnailsGlob[`/src/lib/assets/images/thumbnails/projects/${filename}`];
}
