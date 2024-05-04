"use client";
import { useState } from "react";
import useMediaQuery from "@custom-react-hooks/use-media-query";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Link, PlaneLanding, PlaneTakeoff, TicketPlus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

import { airlinesData } from "@/lib/data/airlines-data";

export function DrawerDialog() {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				{/* Trigger button */}
				<DialogTrigger asChild>
					<Button size="lg" className="w-full uppercase">
						<TicketPlus className="mr-2 h-4 w-4" /> New Booking
					</Button>
				</DialogTrigger>

				{/* Dialog */}
				<DialogContent className="sm:max-w-[512px]">
					<DialogHeader>
						<DialogTitle>Create New Booking.</DialogTitle>
						<DialogDescription>
							Enter Booking Details.
						</DialogDescription>
					</DialogHeader>

					<TicketForm />
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button size="lg" className="w-full uppercase">
					<TicketPlus className="mr-2 h-4 w-4" /> New Booking
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Edit profile</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when
						you're done.
					</DrawerDescription>
				</DrawerHeader>
				<TicketForm className="px-4" />
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

// TOOD: Move to it own component.
/* Ticket Form */

// TODO: Move to global types.
type Location = {
	code: string;
	name: string;
};

// TODO: Move to Data.
const locations: Location[] = [
	{ code: "NRB", name: "Nairobi" },
	{ code: "MBA", name: "Mombasa" },
	{ code: "KIS", name: "Kisumu" },
	{ code: "ELD", name: "Eldoret" },
];

// 01. Create a form schema.
const locationCodes = ["NRB", "MBA", "KIS", "ELD"] as const;

const formSchema = z.object({
	travellerName: z.string().min(2, {
		message: "Required",
	}),
	// TODO: Change to enum.
	departureLocation: z.string({
		required_error: "Required.",
	}),
	destinationLocation: z.enum(locationCodes, {
		message: "Required.",
	}),

	departureAirline: z.string({
		required_error: "Required.",
	}),
});

function TicketForm({ className }: React.ComponentProps<"form">) {
	const [destinationLocations, setDestinationLocations] =
		useState<Location[]>(locations);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			travellerName: "",
			departureLocation: locations[0].code,
			destinationLocation: "MBA",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	// TODO: Move functions to a central place.
	const removeLocationByCode = (
		locations: Location[],
		codeToRemove: string
	): Location[] => {
		return locations.filter((location) => location.code !== codeToRemove);
	};

	function clearDestinationLocation() {
		form.setValue("destinationLocation", ""); // Update destinationLocation to ""
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					// className="w-2/3 space-y-6"
					className={cn("grid items-start gap-4", className)}
				>
					<FormField
						control={form.control}
						name="travellerName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Traveller Name.</FormLabel>
								<FormControl>
									<Input placeholder="Names" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="departureLocation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Departure Location.</FormLabel>
									<Select
										onValueChange={(newValue) => {
											setDestinationLocations(
												removeLocationByCode(
													locations,
													newValue
												)
											);
											clearDestinationLocation();
											field.onChange(newValue);
										}}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a departure location" />
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{locations.map(
												(location: Location) => (
													<SelectItem
														key={location.code}
														value={location.code}
													>
														<div className="flex">
															<PlaneTakeoff className="flex-1 mr-2 h-5 w-4" />{" "}
															<span className="flex-1">
																{location.name}
															</span>
														</div>
													</SelectItem>
												)
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="destinationLocation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Destination Location.</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a destination location" />
											</SelectTrigger>
										</FormControl>

										<SelectContent>
											{destinationLocations.map(
												(location: Location) => (
													<SelectItem
														key={location.code}
														value={location.code}
													>
														<div className="flex">
															<PlaneLanding className="flex-1 mr-2 h-5 w-4" />{" "}
															<span className="flex-1">
																{location.name}
															</span>
														</div>
													</SelectItem>
												)
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* Airlines */}

					<FormField
						control={form.control}
						name="departureLocation"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Departure Airlines.</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a departure airline." />
										</SelectTrigger>
									</FormControl>

									<SelectContent>
										{airlinesData.map((airline: any) => (
											<SelectItem
												key={airline.id}
												value={airline.id}
											>
												<div className="flex w-full">
													<div className="flex-1 bg-gray-400 text-gray-700 px-4 py-2 text-sm">
														<PlaneTakeoff className="mr-2 h-5 w-4" />
													</div>
													<div className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 text-sm">
														{airline.route}
													</div>
													<div className="flex-1 bg-gray-400 text-gray-700 px-4 py-2 text-sm">
														{airline.plane}
													</div>
													<div className="flex-1 bg-gray-400 text-gray-700 px-4 py-2 text-sm">
														{airline.departureTime}
													</div>
													<div className="flex-1 bg-gray-400 text-gray-700 px-4 py-2 text-sm">
														{airline.arrivalTime}
													</div>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Form>

			<form className={cn("grid items-start gap-4", className)}>
				<div className="grid gap-2">
					<Label htmlFor="username">Traveller Name</Label>

					<Input id="username" placeholder="Name" />
				</div>

				<div className="grid gap-2">
					<Label htmlFor="email">Traveller Name</Label>
					<Input
						type="email"
						id="email"
						defaultValue="shadcn@example.com"
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="username">Username</Label>
					<Input id="username" defaultValue="@shadcn" />
				</div>

				<Button type="submit">Save changes</Button>
			</form>
		</>
	);
}
