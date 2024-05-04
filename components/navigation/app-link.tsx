"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Badge } from "../ui/badge";


interface AppLinkProps {
	children: ReactNode;
	icon?: JSX.Element;
	route: string;
	badgeCount?: number;
}

/**
 * Renders a link component with optional icon and badge count.
 *
 * @param {ReactNode} props.children - The children of the link component.
 * @param {JSX.Element} props.icon - The icon element to be rendered.
 * @param {string} props.route - The route of the link.
 * @param {number} props.badgeCount - The count to be displayed in the badge.
 * @return {JSX.Element} The rendered link component.
 */
export default function AppLink({
	children,
	icon,
	route,
	badgeCount
}: AppLinkProps): JSX.Element {
	const pathname = usePathname();

	return (
		<Link
			href={route}
			className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
				pathname === route ? "bg-muted text-primary" : ""
			}`}
		>
			{icon && icon}
			{children}

			{badgeCount && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{badgeCount}</Badge>}
		</Link>
	);
}
