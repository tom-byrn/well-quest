// app/(protected)/subscribe/page.tsx
'use client';

import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const plans = [
  {
    id: 'price_1RHrC6GgmjM6EnOboOeQLPls',
    name: 'Small Team · Monthly',
    price: '$29 / mo',
    blurb: 'Up to 20 seats',
  },
  {
    id: 'price_1RIBlaGgmjM6EnObC79wVjQr',
    name: 'Small Team · Yearly',
    price: '$290 / yr',
    blurb: '2 months free',
  },
  {
    id: 'price_1RHrFAGgmjM6EnObcq7sQjT1',
    name: 'Large Team · Monthly',
    price: '$99 / mo',
    blurb: 'Up to 100 seats',
  },
  {
    id: 'price_1RIBlCGgmjM6EnObXO5f1lqZ',
    name: 'Large Team · Yearly',
    price: '$999 / yr',
    blurb: '2 months free',
  },
];

export default function SubscribePage() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleCheckout = async (priceId: string) => {
    setLoadingId(priceId);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const { url } = await res.json();
      if (url) {
        // Redirect browser directly to Stripe Checkout
        window.location.href = url;
      } else {
        console.error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Checkout error', error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-wellness-darkGreen text-center">
        Choose Your Plan
      </h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((p) => (
          <Card key={p.id} className="bg-wellness-lightGreen shadow-md">
            <CardHeader>
              <CardTitle className="text-wellness-darkGreen">{p.name}</CardTitle>
              <p className="text-wellness-darkGreen mt-1">{p.blurb}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-2xl font-bold text-wellness-darkGreen">
                {p.price}
              </p>
              <Button
                className="w-full bg-wellness-mediumGreen hover:bg-wellness-darkGreen text-wellness-white"
                disabled={loadingId === p.id}
                onClick={() => handleCheckout(p.id)}
              >
                {loadingId === p.id ? 'Redirecting…' : 'Continue'}
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* Free demo */}
        <Card className="col-span-full bg-wellness-lightGreen shadow-md">
          <CardContent className="text-center">
            <p className="mb-4 p-10 font-medium text-wellness-darkGreen text-2xl">
              Just want to look around first?
            </p>
            <Button
              variant="outline"
              className="border-wellness-mediumGreen text-xl text-wellness-mediumGreen"
              asChild
            >
              <a href="/">Skip for now &rarr;</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
