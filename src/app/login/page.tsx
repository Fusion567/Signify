"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setError("");
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem(
        "signify_session",
        JSON.stringify({ email: "google-user@example.com", name: "Google User", provider: "google" })
      );
      router.push("/dashboard");
    }, 1500);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      setIsLoading(false);
      // Let any password pass for ease of testing, or check if it matches a default
      localStorage.setItem(
        "signify_session",
        JSON.stringify({ email, name: email.split("@")[0], provider: "email" })
      );
      router.push("/dashboard");
    }, 1200);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem(
        "signify_session",
        JSON.stringify({
          email: "demo@signwell-clone.com",
          name: "Demo Account",
          provider: "demo",
        })
      );
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column - Teal Branding */}
      <div className="hidden lg:flex flex-col justify-between w-[40%] bg-[#4bb5b9] p-12 text-white relative">
        <div className="flex justify-center mt-8">
          <Link href="/" className="font-[cursive] text-5xl tracking-wide">SignWell</Link>
        </div>

        <div className="flex flex-col items-center flex-grow justify-center mt-12 mb-8">
          {/* Custom SVG Graphic (Smiling Document) */}
          <div className="relative w-40 h-40 mb-12">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
              <path d="M20 15C20 12.2386 22.2386 10 25 10H65L85 30V85C85 87.7614 82.7614 90 80 90H25C22.2386 90 20 87.7614 20 85V15Z" fill="white" />
              <path d="M65 10L85 30H70C67.2386 30 65 27.7614 65 25V10Z" fill="#e0e0e0" />
              <path d="M35 35C35 32 40 32 40 35" stroke="#4bb5b9" strokeWidth="3" strokeLinecap="round" />
              <path d="M55 35C55 32 60 32 60 35" stroke="#4bb5b9" strokeWidth="3" strokeLinecap="round" />
              <path d="M42 45C42 48 53 48 53 45" stroke="#4bb5b9" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-8 -right-16 w-32 h-16">
              <path d="M10 30C15 15 25 5 30 20C35 35 25 45 20 30C15 15 35 20 40 35C45 50 60 25 80 20" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="5" y1="45" x2="85" y2="45" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-center leading-snug mb-8">
            Welcome Back to SignWell<br />Get Your Documents Signed Faster
          </h2>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-8 lg:px-24">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-[28px] font-semibold text-[#4bb5b9] text-center mb-6">
            Log In to SignWell
          </h1>

          {/* Quick Demo Account Access Button */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-sm text-blue-800 mb-3 font-medium">
              Want to test the app quickly? Use our simulated demo account!
            </p>
            <Button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="w-full bg-[#0062ff] hover:bg-[#0052d4] text-white font-semibold py-2.5 rounded shadow-sm transition-colors text-sm"
            >
              🚀 Access with Demo Account
            </Button>
          </div>

          <Button 
            variant="outline" 
            className="w-full h-12 mb-6 font-medium text-gray-700 bg-white border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-3 relative overflow-hidden shadow-sm"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <div className="absolute left-4 w-6 h-6 flex items-center justify-center">
              <Image 
                src="/google.png" 
                alt="Google" 
                width={20} 
                height={20} 
                className="object-contain"
              />
            </div>
            Log in with Google
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-sm text-gray-500 font-medium">or</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-6">
            <div>
              <label className="block text-[15px] font-semibold text-gray-700 mb-2">Work Email</label>
              <Input 
                type="email" 
                placeholder="demo@signwell-clone.com" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-gray-300 focus-visible:ring-[#4bb5b9] rounded-sm placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[15px] font-semibold text-gray-700 mb-2">
                Password
              </label>
              <Input 
                type="password" 
                placeholder="••••••••" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-gray-300 focus-visible:ring-[#4bb5b9] rounded-sm placeholder:text-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <div className="flex items-center justify-between pt-2">
              <Link href="/sign_up" className="text-sm text-[#4bb5b9] hover:underline font-medium">
                Don't have an account? Sign up
              </Link>
              <Button 
                type="submit" 
                className="bg-[#4bb5b9] hover:bg-[#3ea0a4] text-white font-medium px-8 h-10 rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Log In"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
