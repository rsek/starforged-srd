<template>
	<nav class="toc card">
		<section class="moves">
			<!-- <h2>Moves</h2> -->
			<RouterLink
				v-for="moveCat in moveCategories"
				:to="`/moves/${moveCat.frontmatter.key}`"
				class="menu-item h5 type-header"
				active-class="menu-item-selected"
				>{{ moveCat.frontmatter.title }}</RouterLink
			>
		</section>
	</nav>
</template>

<style lang="pcss">
.toc {
	--toc-border-radius: var(--radius-2);
	display: flex;
	flex-direction: column;
	.menu-item {
		border-width: var(--border-size-1);
		border-style: solid;
		text-decoration: none;
		padding: var(--size-1);
		margin: 0;

		&:first-child {
			border-start-start-radius: var(--toc-border-radius);
			border-start-end-radius: var(--toc-border-radius);
		}

		&:last-child {
			border-end-start-radius: var(--toc-border-radius);
			border-end-end-radius: var(--toc-border-radius);
		}
	}
}

.moves {
	display: contents;
}
</style>

<script setup lang="ts">
const moveCategories = useDocuments('~/pages/moves/*/*')
	.value.filter((page) => page.filename.includes('index.md'))
	.sort((cur, prev) => cur.frontmatter.page - prev.frontmatter.page)

// console.log('moveCategories', moveCategories)
</script>
