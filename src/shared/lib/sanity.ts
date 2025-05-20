import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'wdap9hb0',
  dataset: 'production',
  apiVersion: '2025-05-20',
  useCdn: true,
});

export default client;
