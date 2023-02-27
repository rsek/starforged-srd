<template>
	<article class="ironsworn-move">
		<span v-if="$frontmatter.progress_move" class="progress-move-label"
			>Progress Move</span
		>
		<slot></slot>

		<IronSourceInfo :page="$frontmatter.page"></IronSourceInfo>
	</article>
</template>

<style>
.progress-move-label {
	font-style: italic;
}
</style>
