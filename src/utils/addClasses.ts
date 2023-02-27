// TS replacement for rehype-add-classes to avoid an insecure version of hast-util-select

import { selectAll } from 'hast-util-select'
import { type Element, type Node } from 'hast-util-select/lib/types'

export function addClasses(additions: Record<string, string>) {
	const adders = Object.entries(additions).map(adder)
	return (node: Node) => {
		adders.forEach((a) => {
			a(node)
		})
	}
}

function adder([selector, className]: [string, string]) {
	const writer = write(className)
	return (node: Node) => {
		selectAll(selector, node).forEach(writer)
	}
}

function write(className: string) {
	return ({ properties }: Element) => {
		if (properties?.className == null) (properties as any).className = className
		else (properties.className as string) += ` ${className}`
	}
}
