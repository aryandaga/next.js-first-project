"use client";
import Login from "@/pages/firebase/login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/pages/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/test3");
      }
    });
  }, [auth, router]);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl text-black"> Firebase OTP Sign-in</h1>
      <Login />
    </main>
  );
}
