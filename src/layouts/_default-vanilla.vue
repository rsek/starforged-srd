<template>
	<article class="layout">
		<section class="sidebar">
			<IronLogotype />
			<TableOfContents />
		</section>
		<main class="content"><slot></slot></main>
	</article>
</template>

<style lang="scss">
@import '~/assets/base.scss';

.layout {
	height: 100vh !important;
}
</style>
