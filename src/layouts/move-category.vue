<template layout="default">
	<article>
		<h2>{{ $frontmatter.title }}</h2>
		<div class="move-category-description">
			<slot></slot>
		</div>
		<ul>
			<li v-for="move in moves" :key="move.meta.filename">
				<RouterLink :to="move.href">{{ move.frontmatter.title }}</RouterLink>
			</li>
		</ul>
	</article>
</template>

<style></style>

<script setup lang="ts">
const moves = useDocuments('~/pages/moves/**').value.filter(
	(mdx) =>
		mdx.href.startsWith(usePage().route.path) && !mdx.href.endsWith('index.mdx')
)
</script>
