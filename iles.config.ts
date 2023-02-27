import { defineConfig } from 'iles'
import type * as Gfm from 'remark-gfm'
import { addClasses } from './src/utils/addClasses'

const addClassesOptions: Record<string, string> = {
	table: 'table table-striped',
	caption: 'caption-top'
}
const gfmOptions: Gfm.Options = {}

export default defineConfig({
	// turbo: true,
	siteUrl: 'https://rsek.github.io/starforged-srd',
	markdown: {
		remarkPlugins: [['remark-gfm', gfmOptions]],
		rehypePlugins: [[addClasses, addClassesOptions], 'rehype-slug']
	},

	vite: {},
	components: {
		dirs: ['src/components']
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
						// frontmatter.layout = 'move'
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
