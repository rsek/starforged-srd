import { defineApp } from 'iles'

import MarkdownRouterLink from '~/components/MarkdownRouterLink.vue'

export default defineApp({
	enhanceApp(ctx) {
		// const inklineConfig: Partial<PrototypeConfig> = { colorMode: 'system' }
		// ctx.app.use(Inkline, inklineConfig)
	},
	mdxComponents: {
		a: MarkdownRouterLink
	}
})
