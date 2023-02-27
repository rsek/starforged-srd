<template>
	<a :href="href()"><slot></slot></a>
</template>

<script setup lang="ts">
const props = defineProps<{ href: string }>()

function idToRoute(dataforgedId: string) {
	return dataforgedId.replace(/^starforged\/(collections\/)?/, '/')
}

const href = () => idToRoute(props.href)
</script>
