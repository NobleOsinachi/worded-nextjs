import * as React from "react";
import { Component } from "react";

interface ScoreCardProps {
  title: string;
}

const ScoreCard = ({ title }: ScoreCardProps) => {
  return <div>{title}</div>;
};

export default ScoreCard;
