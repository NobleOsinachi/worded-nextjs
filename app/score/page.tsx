"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Score = () => {
  const router = useRouter();
  // Use nullish coalescing operator to handle null or undefined cases
  let id = parseInt(useSearchParams()?.get("id") ?? "0", 10);

  if (isNaN(id)) id = 0;

  router.push("/score/" + id);

  return null;
};

export default Score;
