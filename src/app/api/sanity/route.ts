import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'wdap9hb0',
  dataset: 'production',
  apiVersion: '2025-05-20',
  useCdn: true,
});

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  if (!query || typeof query !== 'string') {
    return NextResponse.json(
      { error: 'Missing or invalid query' },
      { status: 400 }
    );
  }

  try {
    const data = await client.fetch(query);
    return NextResponse.json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Sanity query failed' }, { status: 500 });
  }
}
