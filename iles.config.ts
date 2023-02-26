import { defineConfig } from 'iles'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	// turbo: true,
	siteUrl: 'https://rsek.github.io/starforged-srd',
	markdown: {
		remarkPlugins: ['remark-gfm']
	},
	vite: {
		ssr: { noExternal: ['vuetify'] }
	},
	components: {
		dirs: ['src/components', 'node_modules/vuetify'],
		resolvers: [Vuetify3Resolver()]
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
