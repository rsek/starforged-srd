import { defineConfig } from 'iles'

export default defineConfig({
	// turbo: true,
	siteUrl: 'https://rsek.github.io/starforged-srd',
	markdown: {
		remarkPlugins: ['remark-gfm'],
		rehypePlugins: [
			[
				'rehype-add-classes',
				{ table: 'table table-striped', caption: 'caption-top' }
			]
		]
	},

	vite: {
		ssr: { noExternal: ['agnostic-vue'] }
	},
	components: {
		dirs: ['src/components', 'node_modules/agnostic-vue']
	},

	extendFrontmatter(frontmatter, filename) {
		switch (true) {
			case filename.startsWith('src/pages/moves/'):
				{
					const fragments = filename.replace(/\.mdx?$/, '').split('/')
					if (filename.endsWith('index.md')) {
						frontmatter.layout = 'move-category'
						frontmatter.key = fragments[fragments.length - 2]
						// dataforged v2 ID
						frontmatter._id = `starforged/collections/moves/${
							frontmatter.key as string
						}`
					} else {
						frontmatter.layout = 'move'
						frontmatter.key = fragments[fragments.length - 1]
						frontmatter.parent_key = fragments[fragments.length - 2]
						// dataforged v2 ID
						frontmatter._id = `starforged/moves/${
							frontmatter.parent_key as string
						}/${frontmatter.key as string}`
					}
				}
				break
			default:
				break
		}
	}
})
