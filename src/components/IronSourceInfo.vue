<template>
	<footer><cite>Ironsworn: Starforged</cite>, p. {{ page }}</footer>
</template>

<script setup lang="ts">
defineProps<{ page: number }>()
</script>
