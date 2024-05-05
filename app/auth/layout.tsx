import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogInIcon, MountainIcon } from "lucide-react";

export default function AuthLayout({ children }: any) {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center justify-between bg-white shadow-sm dark:bg-gray-950 transition-transform duration-300 ease-in-out translate-y-0 will-change-transform">
				<Link className="flex items-center justify-center" href="/">
					<MountainIcon className="h-6 w-6" />
					<span className="sr-only">Acme Inc</span>
				</Link>

				<nav className="flex items-center justify-center gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Features
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Pricing
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						About
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Contact
					</Link>
				</nav>

				<Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90">
					<LogInIcon className="h-4 w-4 mr-2" />
					Login
				</Button>
			</header>

			<main className="flex-1 pt-14">{children}</main>
		</div>
	);
}
