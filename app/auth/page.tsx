// app/auth/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "@/lib/firebase"; 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/subscribe"); 
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInWithPopup(auth, provider);
      router.push("/subscribe");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <Card className="w-full max-w-md bg-wellness-lightGreen shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-wellness-darkGreen">
            {isSignUp ? "Create your account" : "Welcome back"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white"
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-wellness-mediumGreen text-wellness-white hover:bg-wellness-darkGreen"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-wellness-lightGreen px-2 text-muted-foreground">or</span>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogle}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2"
            >
              {/* Google icon (inline SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5h-1.7V20H24v8h11.3C34.4 33.8 29.7 38 24 38c-8.3 0-15-6.7-15-15s6.7-15 15-15c3.8 0 7.3 1.4 10 3.9l6.8-6.8C35.3 2.8 29.9 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24c0-1.6-.2-3.2-.4-4.8z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.1l6.6 4.8C14.1 16.1 18.7 14 24 14c3.8 0 7.3 1.4 10 3.9l6.8-6.8C35.3 2.8 29.9 0 24 0 14.8 0 7 5.4 3.4 13.2z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 48c5.8 0 11.1-2.2 15.1-5.9l-7-5.8C29.5 37.6 26.9 38 24 38c-5.6 0-10.3-4.2-11.3-9.7H6.3l-6.6 5.1C5.8 42.8 13.2 48 24 48z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5h-1.7V20H24v8h11.3c-1.2 4.9-5.5 8.5-10.3 8.5-5.6 0-10.3-4.2-11.3-9.7H6.3l-6.6 5.1C5.8 42.8 13.2 48 24 48c13.3 0 24-10.7 24-24 0-1.6-.2-3.2-.4-4.8z"
                />
              </svg>
              Sign in with Google
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-wellness-darkGreen">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-medium underline hover:text-wellness-mediumGreen"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
