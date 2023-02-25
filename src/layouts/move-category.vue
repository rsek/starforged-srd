<template layout="default">
	<article>
		<h2>{{ $frontmatter.title }}</h2>
		<div class="move-category-description">
			<slot></slot>
		</div>
		<ul>
			<li v-for="move in moves" :key="move.href">
				<RouterLink
					:to="`/moves/${move.frontmatter.parent_key}/${move.frontmatter.key}`">
					{{ move.frontmatter.title }}
				</RouterLink>
			</li>
		</ul>
		<SourceInfo :page="$frontmatter.page"></SourceInfo>
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
