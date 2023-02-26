<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<div class="collapsible">
			<div class="collapsible-item" title="Moves">
				<RouterLink
					v-for="moveCat in moveCategories"
					:to="`/moves/${moveCat.frontmatter.key}`"
					>{{ moveCat.frontmatter.title }}</RouterLink
				>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const moveCategories = useDocuments('~/pages/moves/*/*')
	.value.filter((page) => page.filename.includes('index.md'))
	.sort((cur, prev) => cur.frontmatter.page - prev.frontmatter.page)
</script>
