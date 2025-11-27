import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/docs">) {
	const base = baseOptions();

	return (
		<DocsLayout
			tree={source.pageTree}
			{...base}
			githubUrl="https://github.com/omeriadon/immune"
			nav={{
				...base.nav,
				enabled: true,
				transparentMode: "always",
				title: "Immune"
			}}
		>
			{children}
		</DocsLayout>
	);
}
