import { defineApp } from 'iles'
import MarkdownRouterLink from '~/components/MarkdownRouterLink.vue'
import IronParagraph from '~/components/IronParagraph.vue'

export default defineApp({
	mdxComponents: {
		a: MarkdownRouterLink,
		p: IronParagraph
	}
})
