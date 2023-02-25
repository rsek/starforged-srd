<template>
	<RouterLink :to="to()"><slot></slot></RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{ href: string }>()

function idToRoute(dataforgedId: string) {
	return dataforgedId.replace(/^starforged\/(collections\/)?/, '/')
}

const to = () => idToRoute(props.href)
</script>
