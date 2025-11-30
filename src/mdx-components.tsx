import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		h1: (props) => <h1 {...props} className="text-fd-primary" />,
		h2: (props) => <h2 {...props} className="text-fd-primary" />,
		h3: (props) => <h3 {...props} className="text-fd-primary" />,
		h4: (props) => <h4 {...props} className="text-fd-primary" />,
		...components,
	};
}
