import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const MONOPAY_TOKEN = process.env.MONOPAY_TOKEN!;
const MONOBANK_API_URL =
  'https://api.monobank.ua/api/merchant/invoice/status?invoiceId=';

export async function POST(req: NextRequest) {
  const { invoiceId } = await req.json();

  if (!invoiceId) {
    return new NextResponse('Missing invoiceId', { status: 400 });
  }

  try {
    const response = await fetch(`${MONOBANK_API_URL}${invoiceId}`, {
      method: 'GET',
      headers: {
        'X-Token': MONOPAY_TOKEN,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new NextResponse(`Monobank error: ${errorText}`, {
        status: response.status,
      });
    }

    const data = await response.json();

    if (data.status === 'success') {
      const statusMessage = `✅ Оплата через MonoPay успішна!\n
Сума: ${data.finalAmount / 100} грн\n
Замовлення: ${data.invoiceId}`;

      await axios({
        method: 'post',
        url: `${SITE_URL}api/telegram`,
        data: statusMessage,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return NextResponse.json({ ok: true, status: data.status });
  } catch (error) {
    console.error('Check status error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
