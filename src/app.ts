import { defineApp } from 'iles'
import MarkdownRouterLink from '~/components/MarkdownRouterLink.vue'

export default defineApp({
	mdxComponents: {
		a: MarkdownRouterLink
	}
})
