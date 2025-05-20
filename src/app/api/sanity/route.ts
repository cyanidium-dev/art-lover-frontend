import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'wdap9hb0',
  dataset: 'production',
  apiVersion: '2025-05-20',
  useCdn: true,
});

export const fetchSanityData = async (
  query: string,
  params: Record<string, unknown> = {}
) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/sanity`, {
    method: 'POST',
    body: JSON.stringify({ query, params }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) throw new Error('Failed to fetch Sanity data');
  return res.json();
};

export async function POST(req: NextRequest) {
  const { query, params } = await req.json();

  if (!query || typeof query !== 'string') {
    return NextResponse.json(
      { error: 'Missing or invalid query' },
      { status: 400 }
    );
  }

  try {
    const data = await client.fetch(query, params || {});
    return NextResponse.json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Sanity query failed' }, { status: 500 });
  }
}
