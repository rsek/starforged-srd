<page>
title: Moves
</page>

<template>
	<ul>
		<li v-for="moveCategory in moveCategories">
			<RouterLink :to="`/moves/${moveCategory.frontmatter.key}`">{{
				moveCategory.frontmatter.title
			}}</RouterLink>
		</li>
	</ul>
</template>

<style>
@media (min-width: 1024px) {
	.moves {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>

<script setup lang="ts">
const moveCategories = useDocuments('~/pages/moves/*/*')
	.value.filter((page) => page.filename.includes('index.md'))
	.sort((cur, prev) => cur.frontmatter.page - prev.frontmatter.page)
</script>
