// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { headers } from "next/headers";
import { ProtectedLayout } from "@/components/protected-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Employee Wellness Platform",
  description: "A community platform for employee wellness and events",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read the pathname that the middleware injected into the response headers
  const pathname = (await headers()).get("x-pathname") ?? "/";
  const isAuth = pathname.startsWith("/auth");
  const isPayments = pathname.startsWith("/subscribe");

  // Public auth routes: no sidebar or protection
  if (isAuth) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="m-32">{children}</div>
        </body>
      </html>
    );
  }

  // Payments flow: require auth but hide sidebar
  if (isPayments) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <ProtectedLayout>
            <div className="m-32">{children}</div>
          </ProtectedLayout>
        </body>
      </html>
    );
  }

  // Default: sidebar + protected content
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProtectedLayout>
          <div className="flex h-screen bg-gray-100">
            <MainNav />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
        </ProtectedLayout>
      </body>
    </html>
  );
}
