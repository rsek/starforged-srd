<template layout="default">
	<article>
		<h2>{{ $frontmatter.title }}</h2>
		<span v-if="$frontmatter.progress_move" class="progress-move-label"
			>Progress Move</span
		>
		<div class="move-text">
			<slot></slot>
		</div>
		<SourceInfo :page="$frontmatter.page"></SourceInfo>
	</article>
</template>

<style>
.progress-move-label {
	font-style: italic;
}
.move-text strong {
	font-weight: bold;
}
</style>

<script setup lang="ts"></script>
