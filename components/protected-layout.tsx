// components/ProtectedLayout.tsx
'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/components/auth-provider';
import AuthGuard from '@/components/auth-guard';

export function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AuthGuard>{children}</AuthGuard>
    </AuthProvider>
  );
}
