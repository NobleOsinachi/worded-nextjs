"use client";
import { useRouter, useSearchParams } from "next/navigation";

const Score = () => {
  const router = useRouter();
  let id = parseInt(useSearchParams()?.get("id") ?? "0", 10);
  if (isNaN(id)) id = 0;
  router.push("/score/" + id);
  return null;
};

export default Score;
