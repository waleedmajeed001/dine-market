import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Debugging: Log environment variables
console.log("NEXT_PUBLIC_SANITY_PROJECT_ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("NEXT_PUBLIC_SANITY_DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables");
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-05",
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
