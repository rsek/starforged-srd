import { defineConfig } from 'iles'
import { InklineResolver } from 'unplugin-vue-components/resolvers'
import '@inkline/inkline'

export default defineConfig({
	siteUrl: 'https://rsek.github.io/starforged-srd',
	markdown: {
		remarkPlugins: ['remark-gfm']
	},
	components: {
		globs: [
			'src/components/**/*.vue',
			'node_modules/@inkline/inkline/components/**/*.vue'
		],
		exclude: ['node_modules/@inkline/inkline/components/*/examples/**'],
		resolvers: [InklineResolver()]
	},
	// debug: false,

	extendFrontmatter(frontmatter, filename) {
		switch (true) {
			case filename.startsWith('src/pages/moves/'):
				const fragments = filename.replace(/\.mdx?$/, '').split('/')
				if (filename.endsWith('index.mdx')) {
					frontmatter.layout = 'move-category'
					frontmatter.key = fragments[fragments.length - 2]
					// dataforged v2 ID
					frontmatter._id = `starforged/collections/moves/${frontmatter.key}`
				} else {
					frontmatter.layout = 'move'
					frontmatter.key = fragments[fragments.length - 1]
					frontmatter.parent_key = fragments[fragments.length - 2]
					// dataforged v2 ID
					frontmatter._id = `starforged/moves/${frontmatter.parent_key}/${frontmatter.key}`
				}
				break
			default:
				break
		}
	}
})
