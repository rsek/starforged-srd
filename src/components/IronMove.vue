<template>
	<IronCard class="ironsworn-move">
		<template #header>
			<h3 class="move-title type-display" :id="$props.id">
				{{ $props.title }}
			</h3>
		</template>
		<template #default>
			<span v-if="$props.progress_move" class="progress-move-label"
				>Progress Move</span
			>
			<slot></slot>
		</template>
		<template #footer>
			<IronSourceInfo :page="$props.page" />
		</template>
	</IronCard>
</template>

<style lang="pcss">
.progress-move-label {
	font-style: italic;
}
.move-title {
  font-weight: var(--font-weight-7);
  font-size: var(--font-size-4);
}
</style>

<script setup lang="ts">
defineProps<{
	progress_move?: boolean
	page?: number
	title: string
	id: string
}>()
</script>
