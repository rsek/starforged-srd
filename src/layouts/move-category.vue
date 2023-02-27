<template layout="default">
	<article>
		<h2>{{ $frontmatter.title }}</h2>
		<div class="move-category-description">
			<slot></slot>
		</div>
		<section v-for="move in moves" :key="move.key">
			<h3>{{ move.frontmatter.title }}</h3>
			<component :is="move" />
		</section>
	</article>
</template>

<style></style>

<script setup lang="ts">
const pages = useDocuments('~/pages/moves/**/*')
const moves = pages.value.filter(
	(page) =>
		page.filename !== usePage().meta.filename &&
		page.frontmatter.parent_key === usePage().frontmatter.key
)
</script>
