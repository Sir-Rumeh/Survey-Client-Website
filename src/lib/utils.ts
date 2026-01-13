import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const emConfig = {
	serviceID: "service_8hxsh8z",
	templateID: "template_zcj3nzr",
	publicID: "Thia5QgjBtrZ0NeIR",
};
