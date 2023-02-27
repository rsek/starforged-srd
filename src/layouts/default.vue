<template>
	<article class="layout flex flex-row">
		<section class="sidebar">
			<IronLogotype />
			<TableOfContents />
		</section>
		<main class="content"><slot></slot></main>
	</article>
</template>

<style lang="pcss">
@import url('~/styles/main.css');

.layout {
	display: flex;
	flex-direction: row;
	height: 100vh !important;
  padding: var(--size-2);
}

.sidebar {
	display: flex;
	flex-direction: column;
	width: var(--size-14);
  padding: var(--size-2);
  gap: var(--size-2);
}

.content {
  overflow-x: scroll;
  padding: var(--size-2);
}
</style>
