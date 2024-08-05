import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fullUrlToInternalLink = (url: string) =>
  url.replace("https://react-graph-gallery.com/", "/")
