export const fetchSanityData = async (query: string) => {
  const res = await fetch('/api/sanity', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) throw new Error('Failed to fetch Sanity data');
  return res.json();
};
