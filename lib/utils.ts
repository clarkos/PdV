import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PostData } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchData() {
  const results = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json());

    console.log(results)
    return results;
}