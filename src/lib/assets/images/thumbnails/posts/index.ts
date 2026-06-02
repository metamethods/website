import type { Picture } from '@sveltejs/enhanced-img';

const postThumbnailsGlob = import.meta.glob<Picture>('$lib/assets/images/thumbnails/posts/*.webp', {
	query: '?w=800&enhanced',
	import: 'default',
	eager: true
});

export function getPostThumbnailPicture(filename: string): Picture {
	return postThumbnailsGlob[`/src/lib/assets/images/thumbnails/posts/${filename}`];
}
