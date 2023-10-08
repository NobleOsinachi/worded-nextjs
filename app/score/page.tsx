"use client";
import { useRouter, useSearchParams } from "next/navigation"; // Import from next/navigation instead of next/router
import React from "react";
import ProgressBar from "react-customizable-progressbar";

const Score = () => {
  const router = useRouter();
  // Use nullish coalescing operator to handle null or undefined cases
  const id = parseInt(useSearchParams()?.get("score") ?? "0", 10);

  // const id = useSearchParams()?.get("score");

  // Now 'id' is guaranteed to be a number or 0

  // Convert 'id' to a numeric value (assuming it's a number)
  const progress = id || 0;

  // const progress = 80; // Set the progress value dynamically
  // const router = useRouter();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span style={{ marginTop: "0px", fontSize: "40px" }}>
        You scored: {progress / 10} / 10
      </span>

      <ProgressBar progress={progress} radius={100} />
      <span style={{ marginTop: "0px", fontSize: "40px" }}>{progress}%</span>

      <button
        className="bg-blue-200 p-3"
        onClick={() => {
          router.push("/");
        }}
      >
        Try again?
      </button>
    </div>
  );
};

export default Score;
