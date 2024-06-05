"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import AuthService from "@/lib/services/auth/authService";

// TODO: Convert login form to client component.

export default function LoginPage() {
	// 01. Create a form schema.
	const loginFormSchema = z.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z.string().min(8, {
			message: "Password must be at least 8 characters",
		}),
	});

	// 02. Define login form data.
	const loginForm = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
	});

	// 2. Define form submit event handler.
	async function onSubmit(values: z.infer<typeof loginFormSchema>) {
		const feedback = await AuthService.login(values.email, values.password);

		console.log(feedback);
	}

	return (
		<div className="flex h-screen flex-col">
			<div className="flex flex-1 lg:grid lg:grid-cols-2 xl:min-h-[800px]">
				<div className="flex items-center justify-center py-12 w-full">
					<div className="mx-auto grid w-[350px] gap-8">
						<div className="grid gap-2 text-center">
							<h1 className="text-3xl font-bold">Login</h1>
							<p className="text-balance text-muted-foreground">
								Enter your email below to login to your account
							</p>
						</div>

						{/* TODO: Prevent input layout changing on error display */}
						<Form {...loginForm}>
							<form
								onSubmit={loginForm.handleSubmit(onSubmit)}
								className="grid gap-4"
							>
								<FormField
									control={loginForm.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email.</FormLabel>
											<FormControl>
												<Input
													placeholder="email"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* TODO: Implement toggle show password */}
								<FormField
									control={loginForm.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password.</FormLabel>
											<FormControl>
												<Input
													placeholder="password"
													type="password"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="grid gap-2">
									<div className="flex items-center">
										<Label htmlFor="password">
											Password
										</Label>

										{/* TODO: Implement forgot password. */}
										<Link
											className="ml-auto inline-block text-sm underline"
											href="#"
										>
											Forgot your password?
										</Link>
									</div>
								</div>
								<Button className="w-full" type="submit">
									Login
								</Button>

								<div className="grid grid-cols-2 gap-2">
									{/* TODO: Implement google SSO login. */}
									<Button
										className="w-full"
										variant="outline"
									>
										<LogInIcon className="mr-2 h-4 w-4" />
										Login Google
									</Button>

									{/* TODO: Implement Microsoft SSO login. */}
									<Button
										className="w-full"
										variant="outline"
									>
										<LogInIcon className="mr-2 h-4 w-4" />
										Login Microsoft
									</Button>
								</div>
							</form>
						</Form>

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
