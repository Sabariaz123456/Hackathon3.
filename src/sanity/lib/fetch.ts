import { createClient } from "next-sanity";

const client = createClient({
  projectId: "uvv8e6x0", // Replace with your actual project ID
  dataset: "production", // Dataset to fetch data from
  useCdn: true,          // Use CDN for faster responses
  apiVersion: "2023-10-10", // API version (date format)
});

type FetchOptions = {
  query: string;
  params?: Record<string, unknown>; // Explicitly type params as an object
};

export async function sanityFetch<T>({ query, params = {} }: FetchOptions): Promise<T> {
  try {
    const data = await client.fetch<T>(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw new Error("Failed to fetch data");
  }
}

export { client };
