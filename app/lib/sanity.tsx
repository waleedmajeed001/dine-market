import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"; // Correct type for source
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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

const builder: ImageUrlBuilder = imageUrlBuilder(client);

// ✅ Fix: Use `SanityImageSource` instead of `any`
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
