<template>
	<nav class="toc card">
		<section class="moves">
			<h2>Moves</h2>
			<RouterLink
				v-for="moveCat in moveCategories"
				:to="`/moves/${moveCat.frontmatter.key}`"
				class="menu-item h5"
				active-class="menu-item-selected"
				>{{ moveCat.frontmatter.title }}</RouterLink
			>
		</section>
	</nav>
</template>

<style>
.toc {
	width: max-content;
	display: flex;
	flex-direction: column;
}
</style>

<script setup lang="ts">
const moveCategories = useDocuments('~/pages/moves/*/*')
	.value.filter((page) => page.filename.includes('index.md'))
	.sort((cur, prev) => cur.frontmatter.page - prev.frontmatter.page)

// console.log('moveCategories', moveCategories)
</script>
