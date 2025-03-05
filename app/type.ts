import { Metadata } from 'next';

// Define proper types for Next.js App Router pages
export type PageProps<Params = Record<string, unknown>, SearchParams = Record<string, unknown>> = {
  params: Params;
  searchParams: SearchParams;
};

// Metadata types
export type GenerateMetadata<Params = Record<string, unknown>> = (props: {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
}) => Promise<Metadata> | Metadata; 