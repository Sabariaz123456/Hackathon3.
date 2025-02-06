import { createClient } from 'next-sanity'

// eslint-disable-next-line @typescript-eslint/no-unused-vars


export const client = createClient({
  projectId :'uvv8e6x0',
  dataset :'production',
  apiVersion : '2025-01-15',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})