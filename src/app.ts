import { Inkline } from '@inkline/inkline'
import { defineApp } from 'iles'
import '@inkline/inkline'

import MarkdownRouterLink from '~/components/MarkdownRouterLink.vue'

export default defineApp({
	enhanceApp(ctx) {
		ctx.app.use(Inkline, {})
	},
	mdxComponents: {
		a: MarkdownRouterLink
	}
})
