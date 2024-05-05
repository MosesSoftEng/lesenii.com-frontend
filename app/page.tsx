/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AOuVl3ncqPw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JSX, SVGProps } from "react";

export default function Component() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center justify-between bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out translate-y-0 will-change-transform">
				<Link className="flex items-center justify-center" href="#">
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

				<Button
					asChild
					className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
				>
					<Link href="/auth/login">
						{" "}
						<LogInIcon className="h-4 w-4 mr-2" /> Login
					</Link>
				</Button>
			</header>
			<main className="flex-1 pt-14">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										The complete platform for building the
										Web
									</h1>
									<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
										Give your team the toolkit to stop
										configuring and start innovating.
										Securely build, deploy, and scale the
										best web experiences.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link
										className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
										href="#"
									>
										Get Started
									</Link>
									<Link
										className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
										href="#"
									>
										Register
									</Link>
								</div>
							</div>
							<img
								alt="Hero"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
								height="550"
								src="/images/mail-dark.png"
								width="550"
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container space-y-12 px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
									New Features
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Faster iteration. More innovation.
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									The platform for rapid progress. Let your
									team focus on shipping features instead of
									managing infrastructure with automated
									CI/CD, built-in testing, and integrated
									collaboration.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
							<div className="grid gap-1">
								<ScalingIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
								<h3 className="text-lg font-bold">
									Infinite scalability, zero config
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Enable code to run on-demand without needing
									to manage your own infrastructure or upgrade
									hardware.
								</p>
							</div>
							<div className="grid gap-1">
								<InfoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
								<h3 className="text-lg font-bold">
									Real-time insights and controls
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Get granular, first-party, real-user metrics
									on site performance per deployment.
								</p>
							</div>
							<div className="grid gap-1">
								<UserIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
								<h3 className="text-lg font-bold">
									Personalization at the edge
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Deliver dynamic, personalized content, while
									ensuring users only see the best version of
									your site.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Experience the workflow the best frontend teams
								love.
							</h2>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Let your team focus on shipping features instead
								of managing infrastructure with automated CI/CD.
							</p>
						</div>
						<div className="flex flex-col gap-4">
							<form className="flex flex-col space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										placeholder="John Doe"
										required
										type="text"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										placeholder="john@example.com"
										required
										type="email"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										placeholder="Your message..."
										required
										rows={4}
									/>
								</div>
								<Button className="w-full" type="submit">
									Submit
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-gray-900 dark:bg-gray-900 py-12 px-4 md:px-6">
				<div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-400">
					<div className="grid gap-1">
						<h3 className="font-semibold text-gray-200">Company</h3>
						<Link className="hover:text-gray-200" href="#">
							About Us
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Our Team
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Careers
						</Link>
						<Link className="hover:text-gray-200" href="#">
							News
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold text-gray-200">
							Products
						</h3>
						<Link className="hover:text-gray-200" href="#">
							Men
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Women
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Kids
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Accessories
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold text-gray-200">
							Resources
						</h3>
						<Link className="hover:text-gray-200" href="#">
							Blog
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Community
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Support
						</Link>
						<Link className="hover:text-gray-200" href="#">
							FAQs
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold text-gray-200">Legal</h3>
						<Link className="hover:text-gray-200" href="#">
							Privacy Policy
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Terms of Service
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Cookie Policy
						</Link>
					</div>
					<div className="grid gap-1">
						<h3 className="font-semibold text-gray-200">Contact</h3>
						<Link className="hover:text-gray-200" href="#">
							Support
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Sales
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Press
						</Link>
						<Link className="hover:text-gray-200" href="#">
							Partnerships
						</Link>
					</div>
				</div>
			</footer>
			<div className="fixed bottom-4 right-4 z-50">
				<Button className="rounded-full" size="icon" variant="outline">
					<ArrowUpIcon className="h-6 w-6" />
					<span className="sr-only">Back to top</span>
				</Button>
			</div>
		</div>
	);
}

function ArrowUpIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m5 12 7-7 7 7" />
			<path d="M12 19V5" />
		</svg>
	);
}

function InfoIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 16v-4" />
			<path d="M12 8h.01" />
		</svg>
	);
}

function LogInIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
			<polyline points="10 17 15 12 10 7" />
			<line x1="15" x2="3" y1="12" y2="12" />
		</svg>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

function ScalingIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<path d="M14 15H9v-5" />
			<path d="M16 3h5v5" />
			<path d="M21 3 9 15" />
		</svg>
	);
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}
