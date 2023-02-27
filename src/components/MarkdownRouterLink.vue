<template>
	<a :href="href()" :class="`link-${linkType()}`"><slot></slot></a>
</template>
<style lang="pcss">
.link-move {
	text-decoration: underline;
	text-underline-offset: 2px;
}
</style>

<script setup lang="ts">
const props = defineProps<{ href: string }>()

function idToRoute(dataforgedId: string) {
	let newId = dataforgedId.replace(/^starforged\/(collections\/)?/, '/')

	// convert to slug
	newId = newId.replace(/(moves|assets)\/([a-z_]*?)\/([a-z_]*?)$/, '$1/$2#$3')

	return newId
}

function extractLinkType(dataforgedId: string) {
	return idToRoute(dataforgedId).split('/')[1]
}

const href = () => idToRoute(props.href)
const linkType = () => extractLinkType(props.href).replace(/s$/, '')
</script>
