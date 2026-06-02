<script lang="ts">
	let { href, src, alt }: { href: string; src: string; alt: string } = $props();
</script>

<a {href} title={alt} rel="nofollow external" class="inline-block h-7.75 w-22">
	<img {src} {alt} class="size-full [image-rendering:pixelated]" />
</a>
