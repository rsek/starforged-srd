import { defineConfig } from 'iles'

export default defineConfig({
	siteUrl: 'https://rsek.github.io/starforged-srd',
	// vite: { base: '/starforged-srd' },
	markdown: {
		remarkPlugins: ['remark-gfm']
	},
	extendFrontmatter(frontmatter, filename) {
		switch (true) {
			case /\/moves\/.+/.test(filename):
				if (/index\.mdx?$/.test(filename)) frontmatter.layout = 'move-category'
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
