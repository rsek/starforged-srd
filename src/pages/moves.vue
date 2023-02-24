<page>
title: Moves
</page>

<template>
	<div class="moves">
		<ul>
			<li v-for="moveCategory in moveCategories">
				<RouterLink :to="moveCategory.href">{{
					moveCategory.frontmatter.title
				}}</RouterLink>
			</li>
		</ul>
	</div>
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
const moveCategories = useDocuments('~/pages/moves/**').value.filter((page) =>
	page.filename.endsWith('index.mdx')
)
</script>
