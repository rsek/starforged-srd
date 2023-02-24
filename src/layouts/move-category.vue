<template layout="default">
	<article>
		<h2>{{ $frontmatter.title }}</h2>
		<div class="move-category-description">
			<slot></slot>
		</div>
		<ul>
			<li v-for="move in moves" :key="move.meta.filename">
				<RouterLink :to="`${move.meta.href.split('/').slice(-2).join('/')}`">{{
					move.frontmatter.title
				}}</RouterLink>
			</li>
		</ul>
	</article>
</template>

<style></style>

<script setup lang="ts">
const moves = useDocuments('~/pages/moves/**').value.filter(
	(mdx) =>
		mdx.href.includes(usePage().meta.href) && !mdx.filename.includes('index')
)
</script>
