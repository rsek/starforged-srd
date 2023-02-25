<template>
	<div class="page">
		<div class="pane-left">
			<header>
				<img alt="logo" class="logo" src="@/assets/logo.svg" />
				<h1>{{ $site.title }}</h1>
			</header>
			<nav class="sidebar">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/moves">Moves</RouterLink>
			</nav>
		</div>
		<div class="pane-right">
			<main><slot /></main>
		</div>
	</div>
</template>
<script setup lang="ts"></script>

<style>
@import '~/assets/base.css';

.page {
	display: grid;
	height: 100%;
	grid-template-columns: 20em 1fr;
}
.pane-left {
	grid-column: 1;
}

.pane-right {
	grid-column: 2;
}
.sidebar {
	display: flex;
	flex-direction: column;
}
</style>
