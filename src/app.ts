import { Inkline, type PrototypeConfig } from '@inkline/inkline'
import { defineApp } from 'iles'
import { components } from '~/inkline'

import MarkdownRouterLink from '~/components/MarkdownRouterLink.vue'

export default defineApp({
	enhanceApp(ctx) {
		const inklineConfig: Partial<PrototypeConfig> = { colorMode: 'system' }
		ctx.app.use(Inkline, inklineConfig)
	},
	mdxComponents: {
		a: MarkdownRouterLink,
		table: components.ITable
	}
})
