"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function DynamicThemeWrapper({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	// Extracts 'introduction' from '/docs/introduction/...'
	// Adjust the index [2] if your base path is different
	const mode = pathname.split("/")[2];

	return (
		<div
			className={mode}
			style={{ display: "contents" }} // Ensures this div doesn't break layout flow
		>
			{children}
		</div>
	);
}
