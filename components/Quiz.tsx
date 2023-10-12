"use client";

import { Question } from "@/app/api/questions/route";
import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import router from "next/router";
import { shuffleArray } from "@/utils/shuffleArray";

const Quiz = () => {
  let [questions, setQuestions] = useState([]);

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  const handleIncrementScore = () => {
    setScore(count + 1);
  };

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    if (count === 10) {
      router.push("/score/?id=" + score);
    }
  }, [count]);

  return (
    <>
      <div className="container mx-auto">
        <article className="w-4/5 mx-auto">
          <p className="p-2 text-center  text-2xl font-bold">Worded Game</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions?.map((question: Question, questionIndex: number) => {
              // Shuffle the answer buttons just once here
              const shuffledAnswers = shuffleArray([
                question.answers.correct,
                question.answers.incorrect,
              ]);

              return (
                <QuestionCard
                  key={question.id}
                  questionIndex={questionIndex}
                  question={question}
                  incrementCount={handleIncrementCount}
                  incrementScore={handleIncrementScore}
                  shuffledAnswers={shuffledAnswers}
                ></QuestionCard>
              );
            })}
          </div>
          <hr />
          <br />
        </article>
      </div>
    </>
  );
};

export default Quiz;
