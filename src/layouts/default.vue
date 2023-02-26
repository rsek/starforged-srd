<template>
	<article>
		<section class="sidebar">
			<header>
				<!-- <img alt="logo" class="logo" src="@/assets/logo.svg" /> -->
				<h1 class="h5 _margin:0">{{ $site.title }}</h1>
			</header>
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
		</section>
		<main><slot></slot></main>
	</article>
</template>

<script setup lang="ts">
const moveCategories = useDocuments('~/pages/moves/*/*')
	.value.filter((page) => page.filename.includes('index.md'))
	.sort((cur, prev) => cur.frontmatter.page - prev.frontmatter.page)
</script>

<style lang="scss">
@import '~/assets/base.scss';

.iron-layout {
	height: 100vh !important;
}
</style>
