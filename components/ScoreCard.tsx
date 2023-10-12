"use client";
import router from "next/router";
import React from "react";
import ProgressBar from "react-customizable-progressbar";

interface ScoreCardProps {
  score: number;
}

const ScoreCard = ({ score }: ScoreCardProps) => {
  const progress = score || 0;

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

export default ScoreCard;
