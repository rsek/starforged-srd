<page>
title: Moves
</page>

<template>
	<div class="moves">
		<ul>
			<li v-for="moveCategory in moveCategories">
				<a :href="moveCategory.href">{{ moveCategory.frontmatter.title }}</a>
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
const moveCategories = useDocuments('~/pages/moves')
</script>
