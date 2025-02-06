import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "uvv8e6x0", // ✅ Make sure this is set in .env.local
  dataset: "production",
  apiVersion: '2023-01-01', // ✅ Ensure API version is specified
  useCdn: false,
});
