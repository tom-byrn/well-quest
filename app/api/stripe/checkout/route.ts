import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil', 
});

export async function POST(req: NextRequest) {
  const { priceId } = await req.json();     
  const origin = req.headers.get('origin')!;     // http://localhost:3000

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/`,
      cancel_url: `${origin}/subscribe/`,
      automatic_tax: { enabled: true },
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return new NextResponse('Stripe error', { status: 500 });
  }
}
