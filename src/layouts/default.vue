<template>
	<IronLayout vertical class="iron-layout">
		<ISidebar client:load>
			<ILayoutHeader class="_padding-bottom:1/2">
				<!-- <img alt="logo" class="logo" src="@/assets/logo.svg" /> -->
				<h1 class="h5 _margin:0">{{ $site.title }}</h1>
			</ILayoutHeader>
			<INav vertical client:load>
				<INavItem to="/">Home</INavItem>
				<ICollapsible client:load>
					<ICollapsibleItem title="Moves">
						<INavItem
							v-for="moveCat in moveCategories"
							:to="`/moves/${moveCat.frontmatter.key}`"
							>{{ moveCat.frontmatter.title }}</INavItem
						>
					</ICollapsibleItem>
				</ICollapsible>
			</INav>
		</ISidebar>
		<ILayoutContent class="_padding:1"><slot></slot></ILayoutContent>
	</IronLayout>
</template>

<script setup lang="ts">
import { ILayout as IronLayout } from '@inkline/inkline'

const moveCategories = useDocuments('~/pages/moves/*/*')
	.value.filter((page) => page.filename.includes('index.md'))
	.sort((cur, prev) => cur.frontmatter.page - prev.frontmatter.page)
</script>

<style lang="scss">
@import '~/assets/base.scss';

.iron-layout {
	height: 100vh !important;
}
</style>
