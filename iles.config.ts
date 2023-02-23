import { defineConfig } from 'iles'

export default defineConfig({
	modules: ['@islands/headings'],
	vue: {
		template: {
			compilerOptions: {
				// for shoelace web components
				isCustomElement: (tag) => tag.startsWith('sl-')
			}
		}
	}
})
