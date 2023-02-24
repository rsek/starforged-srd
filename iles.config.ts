import { defineConfig } from 'iles'

export default defineConfig({
	modules: ['@islands/headings'],
	markdown: {
		remarkPlugins: ['remark-gfm']
	},
	extendFrontmatter(frontmatter, filename) {
		switch (true) {
			case /\/moves\/.+/.test(filename):
				if (/\.mdx?$/) frontmatter.layout = 'move-category'
				else frontmatter.layout = 'move'
				break
			default:
				break
		}
	},
	vue: {
		template: {
			compilerOptions: {
				// for shoelace web components
				isCustomElement: (tag) => tag.startsWith('sl-')
			}
		}
	}
})
