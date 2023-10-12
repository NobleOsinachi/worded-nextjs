import React, { Component, useState } from "react";
import { shuffleArray } from "@/utils/shuffleArray";
import { Question } from "@/app/api/questions/route";

interface QuestionCardProps {
  index: number;
  question: Question;
  incrementCount: Function;
}

const QuestionCard = ({
  index,
  question,
  incrementCount,
}: QuestionCardProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [highlightButtons, setHighlightButtons] = useState(false);

  const handleClick = () => {
    incrementCount();
  };

  // const { buttonsDisabled, highlightButtons } = this.state;
  // let { question, index } = this.props;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h5 className="text-lg font-semibold mb-2">Question {index + 1}</h5>
      <p className="text-gray-700 mb-4">
        Which word is <span className="italic font-bold">{question.type}</span>{" "}
        to <span className="italic font-bold">{question.word}</span>
      </p>

      {shuffleArray([
        <button
          key={question.answers.correct}
          className={
            "px-4 py-2 text-white rounded-md mr-2 " +
            (!highlightButtons ? "bg-blue-500" : "bg-green-500")
          }
          id={question.answers.correct}
          disabled={buttonsDisabled}
          onClick={handleClick}
        >
          {question.answers.correct}
        </button>,
        <button
          key={question.answers.incorrect}
          className={
            "px-4 py-2 text-white rounded-md mr-2 " +
            (!highlightButtons ? "bg-blue-500" : "bg-red-500")
          }
          id={question.answers.incorrect}
          disabled={buttonsDisabled}
          onClick={handleClick}
        >
          {question.answers.incorrect}
        </button>,
      ])}
    </div>
  );
};

export default QuestionCard;
