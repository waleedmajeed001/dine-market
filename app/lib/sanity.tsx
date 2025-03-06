import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { ImageUrlBuilder } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "cxsiq338",
  dataset: "production",
  apiVersion: "2025-03-04",
  useCdn: true,
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}