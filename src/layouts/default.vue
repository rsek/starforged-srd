<template>
	<article class="layout p8">
		<section class="sidebar p8">
			<IronLogotype />
			<TableOfContents />
		</section>
		<main class="content p8"><slot></slot></main>
	</article>
</template>

<style lang="scss">
@use '~/styles/base.scss';

.layout {
	height: 100vh !important;
	display: flex;
	flex-direction: row;
}
</style>
