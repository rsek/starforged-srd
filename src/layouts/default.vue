<template>
	<VLayout>
		<VNavigationDrawer floating permanent>
			<VList>
				<VListItem v-for="moveCat in moveCategories" :key="moveCat.href">
					<RouterLink :to="`/moves/${moveCat.frontmatter.key}`">{{
						moveCat.frontmatter.title
					}}</RouterLink>
				</VListItem>
			</VList>
		</VNavigationDrawer>
		<slot></slot>
	</VLayout>
</template>
<script setup lang="ts">
import { useAppConfig } from 'iles'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

const moveCategories = useDocuments('~/pages/moves/*/*')
	.value.filter((page) => page.filename.includes('index.md'))
	.sort((cur, prev) => cur.frontmatter.page - prev.frontmatter.page)
</script>
