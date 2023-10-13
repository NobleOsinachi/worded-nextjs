"use client";
import Link from "next/link";
import router from "next/router";
import React from "react";
import ProgressBar from "react-customizable-progressbar";

type ScoreCardProps = {
  params: {
    id: number;
  };
};

const ScoreCard = ({ params }: ScoreCardProps) => {
  const progress = params.id || 0;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span style={{ marginTop: "0px", fontSize: "40px" }}>
        You scored: {progress} / 10
      </span>

      <ProgressBar progress={progress * 10} radius={100} />
      <span style={{ marginTop: "0px", fontSize: "40px" }}>
        {progress * 10} %
      </span>

      <Link className="bg-blue-200 p-3 mt-10 " href={"/"}>
        {" "}
        Try again?
      </Link>
    </div>
  );
};

export default ScoreCard;
