<template layout="default">
	<article class="move-category">
		<h2>{{ $frontmatter.title }}</h2>
		<section class="move-category-description">
			<slot></slot>
		</section>
		<section v-for="move in moves()" :key="move.frontmatter.key">
			<IronMove
				class="move-card m16"
				:id="move.frontmatter.key"
				:page="move.frontmatter.page"
				:progress_move="move.frontmatter.progress_move"
				:title="move.frontmatter.title">
				<component :is="move" />
			</IronMove>
		</section>
	</article>
</template>

<style lang="pcss">
.move-category {
  gap: var(--size-3);
  display: flex;
  flex-direction: column;
}
.move-card {
	border-width: 1px;
	border-style: solid;
}
</style>

<script setup lang="ts">
const pages = useDocuments('~/pages/moves/**/*')

function moves() {
	return pages.value
		.filter(
			(page) =>
				page.filename !== usePage().meta.filename &&
				page.frontmatter.parent_key === usePage().frontmatter.key
		)
		.sort((prev, cur) => prev.page - cur.page)
}

console.log(moves().map((mv) => mv.key))
</script>
