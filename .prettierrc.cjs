/**
 * @type { import('prettier').Options }
 */
module.exports = {
	...require('prettier-config-standard'),
	// using spaces for indents is really shitty for the code's accessibility.
	// a fringe benefit of this is that your IDE can customize the tab width rather than it being 'hardcoded' by the spaces.
	useTabs: true
}
