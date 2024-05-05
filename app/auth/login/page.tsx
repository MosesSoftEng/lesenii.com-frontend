import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginPage() {
	return (
		<div className="flex h-screen flex-col">
			<div className="flex flex-1 lg:grid lg:grid-cols-2 xl:min-h-[800px]">
				<div className="flex items-center justify-center py-12 w-full">
					<div className="mx-auto grid w-[350px] gap-6">
						<div className="grid gap-2 text-center">
							<h1 className="text-3xl font-bold">Login</h1>
							<p className="text-balance text-muted-foreground">
								Enter your email below to login to your account
							</p>
						</div>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="m@example.com"
									required
									type="email"
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<Link
										className="ml-auto inline-block text-sm underline"
										href="#"
									>
										Forgot your password?
									</Link>
								</div>
								<Input id="password" required type="password" />
							</div>
							<Button className="w-full" type="submit">
								Login
							</Button>
							<div className="grid grid-cols-2 gap-2">
								<Button className="w-full" variant="outline">
									<LogInIcon className="mr-2 h-4 w-4" />
									Login Google
								</Button>

								<Button className="w-full" variant="outline">
									<LogInIcon className="mr-2 h-4 w-4" />
									Login Microsoft
								</Button>
							</div>
						</div>
						<div className="mt-4 text-center text-sm">
							Don't have an account?
							<Link className="underline" href="#">
								Sign up
							</Link>
						</div>
					</div>
				</div>
				<div className="hidden bg-muted lg:block">
					<img
						alt="Image"
						className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
						height="1080"
						src="/images/mail-dark.png"
						style={{
							aspectRatio: "1920/1080",
							objectFit: "cover",
						}}
						width="1920"
					/>
				</div>
			</div>
		</div>
	);
}
