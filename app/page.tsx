import QuestionCard, { QuestionType } from "@/components/QuestionCard";
import ScoreCard from "@/components/ScoreCard";
import Image from "next/image";
import React from "react";

export default function Home() {
  let sss = [
    {
      id: 1,
      questionType: 1 as QuestionType,
      word: "Noble",
      optionA: "Blessed",
      optionB: "Fortune",
    },

    {
      id: 2,
      questionType: 1 as QuestionType,
      word: "Noble",
      optionA: "Blessed",
      optionB: "Fortune",
    },
  ];
  return (
    <>
      <div className="container mx-auto">
        <article className="w-4/5 mx-auto">
          <p className="p-2 text-center  text-2xl font-bold">Worded Game</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sss.map((s) => (
              <QuestionCard
                key={s.id}
                id={0}
                questionType={s.questionType}
                word={s.word}
                optionA={s.optionA}
                optionB={s.optionB}
              ></QuestionCard>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
