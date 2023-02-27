<template>
	<span class="iron-source-info"
		><cite>Ironsworn: Starforged</cite>, p. {{ page ?? 'TODO' }}</span
	>
</template>

<script setup lang="ts">
defineProps<{ page?: number }>()
</script>

<style lang="pcss">
.iron-source-info {

}
.iron-source-info cite {
    border: 0;
  }
</style>
