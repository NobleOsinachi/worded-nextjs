import React, { Component, useEffect, useState } from "react";
import { shuffleArray } from "@/utils/shuffleArray";
import { Question } from "@/app/api/questions/route";

interface QuestionCardProps {
  questionIndex: number;
  question: Question;
  incrementCount: Function;
  incrementScore: Function;
}

const QuestionCard = ({
  questionIndex,
  question,
  incrementCount,
  incrementScore,
}: QuestionCardProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [highlightButtons, setHighlightButtons] = useState(false);

  const handleClick = (selectedAnswer: string) => {
    incrementCount();
    // Disable buttons after an answer is clicked
    setButtonsDisabled(true);
    // Highlight the answer buttons
    setHighlightButtons(true);

    if (selectedAnswer === question.answers.correct) {
      incrementScore();
    }
  };

  // Combine correct and incorrect answers and shuffle them.
  const shuffleButtons = (question: Question) =>
    shuffleArray([question.answers.correct, question.answers.incorrect]);

  const [buttons, setButtons] = useState(shuffleButtons(question));

  useEffect(() => {
    // Shuffle the buttons when the component initially renders.
    setButtons(shuffleButtons(question));
  }, [question]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h5 className="text-lg font-semibold mb-2">
        Question {questionIndex + 1}
      </h5>
      <p className="text-gray-700 mb-4">
        Which word is <span className="italic font-bold">{question.type}</span>{" "}
        to <span className="italic font-bold">{question.word}</span>
      </p>

      {/* {shuffleArray([ <button key={question.answers.correct} className={ "px-4 py-2 text-white rounded-md mr-2 " + (!highlightButtons ? "bg-blue-500" : "bg-green-500")} id={question.answers.correct} disabled={buttonsDisabled} onClick={handleClick} > {question.answers.correct} </button>, <button key={question.answers.incorrect} className={ "px-4 py-2 text-white rounded-md mr-2 " + (!highlightButtons ? "bg-blue-500" : "bg-red-500")} id={question.answers.incorrect} disabled={buttonsDisabled} onClick={handleClick} > {question.answers.incorrect} </button>,])}*/}

      {/* {shuffledAnswers.map((answer, answerIndex) => ( <button key={answer} className={ "px-4 py-2 text-white rounded-md mr-2 " + (!highlightButtons ? "bg-blue-500" : "bg-green-500") } id={answer} disabled={buttonsDisabled} onClick={() => handleClick(question)} > {answer} </button> ))} */}

      {buttons.map((buttonText, i) => (
        <button
          key={i}
          className={
            // hover:bg-slate-600 hover:rounded-md active:bg-purple-600 focus:ring focus:outline-none focus:ring-green-700 focus:rounded-md

            "px-4 py-2 text-white rounded-md mr-2 p-2 " +
            (highlightButtons
              ? buttonText === question.answers.correct
                ? "bg-green-500 ring-green-700 focus:ring focus:outline-none focus:ring-green-700 focus:rounded-md "
                : "bg-red-500 ring-red-700"
              : "bg-blue-500 hover:bg-slate-600 ")
          }
          id={buttonText}
          disabled={buttonsDisabled}
          onClick={() => handleClick(buttonText)}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
