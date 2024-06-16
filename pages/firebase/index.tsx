"use client";
import Login from "@/pages/firebase/login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/test3");
      }
    });
  }, [auth, router]);

  return (
    <main>
      <Login />
    </main>
  );
}
