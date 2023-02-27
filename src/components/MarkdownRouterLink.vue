<template>
	<RouterLink :to="href()" :class="`link-${linkType()}`"
		><slot></slot
	></RouterLink>
</template>
<style lang="pcss">
.link-move {
	text-decoration: underline;
	text-underline-offset: 2px;
}
</style>

<script setup lang="ts">
const props = defineProps<{ href: string }>()

function idToHref(dataforgedId: string) {
	let newId = dataforgedId.replace(/^starforged\/(collections\/)?/, '/')

	// convert to slug
	newId = newId.replace(/(moves|assets)\/([a-z_]*?)\/([a-z_]*?)$/, '$1/$2#$3')
	// TODO: attempt to fix links by prepending slash?
	return newId
}

function extractLinkType(dataforgedId: string) {
	return idToHref(dataforgedId).split('/')[1]
}

const href = () => idToHref(props.href)
const linkType = () => extractLinkType(props.href).replace(/s$/, '')
</script>
