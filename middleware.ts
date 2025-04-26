// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  res.headers.set('x-pathname', request.nextUrl.pathname); // e.g. "/auth"
  return res;
}

// app/layout.tsx (excerpt)
import { headers } from 'next/headers';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = (await headers()).get('x-pathname') || '/';
  const isAuth = pathname.startsWith('/auth');
  const isPayments = pathname.startsWith('/subscribe');

  /* render with or without MainNav */
}
