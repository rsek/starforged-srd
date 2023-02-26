import { defineApp } from 'iles'

import MarkdownRouterLink from '~/components/MarkdownRouterLink.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import 'vuetify'

const vuetify = createVuetify({
	components,
	directives,
	blueprint: md3,
	theme: { defaultTheme: 'dark' }
})

export default defineApp({
	enhanceApp(ctx) {
		ctx.app.use(vuetify)
	},
	mdxComponents: {
		a: MarkdownRouterLink
	}
})
