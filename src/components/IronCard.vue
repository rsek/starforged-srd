<template>
	<article class="iron-card">
		<header class="iron-card-header" color-scheme="dark">
			<slot name="header"></slot>
		</header>
		<section class="iron-card-body">
			<slot></slot>
		</section>
		<footer class="iron-card-footer type-compact">
			<slot name="footer"></slot>
		</footer>
	</article>
</template>

<style lang="pcss">
.iron-card {
	display: block;
  border-radius: var(--radius-2);
	border-color: var(--text-2);
	overflow: clip;

	border: var(--border-size-1) solid var(--text-2);
	box-shadow: var(--shadow-4);
	background-color: var(--surface-2);
}

.iron-card-header {
  padding: var(--size-2) var(--size-2) 0;
  background-color: var(--surface-1);
  color: var(--text-1);
}

.iron-card-body {
  margin: var(--size-2);
  padding: 0 var(--size-2);
}

.iron-card-footer {
	opacity: 0.5;
	text-align: end;
	/* font-size: 90%; */
  padding: var(--size-2);
}
</style>
