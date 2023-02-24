<template layout="default">
	<article>
		<h2>{{ $frontmatter.title }}</h2>

		<span v-if="$frontmatter.progress_move" class="progress-move-label"
			>Progress Move</span
		>
		<div class="move-text">
			<slot></slot>
		</div>
		<RouterLink :to="$meta.href.split('/').slice(0, -1).join('/')"
			>Return</RouterLink
		>
	</article>
</template>

<style>
.progress-move-label {
	font-style: italic;
}
</style>

<script setup lang="ts"></script>
