import Link, { type LinkProps } from "next/link";
import { Baby, Power, PersonStanding, Replace } from "lucide-react";

export default function DocsPage() {
	return (
		<main className="flex flex-col justify-center items-center px-4 py-16 text-center z-2">
			<h1 className="mb-4 text-3xl font-semibold md:text-4xl">Immune.</h1>
			<p className="text-fd-muted-foreground">
				The different sections of the immune system.
			</p>
			<div className="mt-8 grid gap-4 text-start w-full md:w-[80vh]">
				{[
					{
						name: "Introduction",
						description: "About, structure, how to navigate",
						icon: <Power className="size-full" />,
						href: "/docs/introduction",
					},
					{
						name: "Adaptive Immunity",
						description: "B cells, T cells, antibodies, antigen presentation.",
						icon: <Replace className="size-full" />,
						href: "/docs/adaptive-immunity",
					},
					{
						name: "Innate Immunity",
						description: "Barriers, phagocytes, NK cells, complement system.",
						icon: <Baby className="size-full" />,
						href: "/docs/innate-immunity",
					},
					{
						name: "Immune Organs & Tissues",
						description: "Bone marrow, thymus, spleen, lymph nodes.",
						icon: <PersonStanding className="size-full" />,
						href: "/docs/immune-organs-tissues",
					},
				].map((item) => (
					<Item key={item.name} href={item.href}>
						<div className="flex gap-3 items-center mb-1">
							<Icon>{item.icon}</Icon>
							<h2 className="mb-2 font-medium">{item.name}</h2>
						</div>
						<p className="text-sm text-fd-muted-foreground">
							{item.description}
						</p>
					</Item>
				))}
			</div>
		</main>
	);
}

function Icon({ children }: { children: React.ReactNode }) {
	return (
		<div className="mb-2 size-8 rounded-lg border p-1 text-fd-muted-foreground bg-fd-muted shadow-md">
			{children}
		</div>
	);
}

function Item(props: LinkProps & { children: React.ReactNode }) {
	return (
		<Link
			{...props}
			className="bg-fd-card rounded-2xl border p-4 shadow-lg hover:bg-fd-popover transition-all"
		>
			{props.children}
		</Link>
	);
}
