import React, { Component, useEffect, useState } from "react";
import { shuffleArray } from "@/utils/shuffleArray";
import { Question } from "@/app/api/questions/route";

interface QuestionCardProps {
  questionIndex: number;
  question: Question;
  incrementCount: Function;
  incrementScore: Function;
  shuffledAnswers: Array<string>;
}

const QuestionCard = ({
  questionIndex,
  question,
  incrementCount,
  incrementScore,
  shuffledAnswers,
}: QuestionCardProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [highlightButtons, setHighlightButtons] = useState(false);
  const [buttons, setButtons] = useState(shuffleButtons(question));

  const handleClick = (question: Question) => {
    incrementCount();
    // Disable buttons after a correct answer.
    setButtonsDisabled(true);
    // Highlight the correct answer button.
    setHighlightButtons(true);

    if (question.answers.correct) {
      incrementScore();
    }
  };

  function shuffleButtons(question: Question) {
    // Combine correct and incorrect answers and shuffle them.
    const { correct, incorrect } = question.answers;
    const allAnswers = [correct, incorrect];
    return shuffleArray(allAnswers);
  }

  useEffect(() => {
    // Shuffle the buttons when the component initially renders.
    setButtons(shuffleButtons(question));
  }, [question.answers]);

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
      {/* {shuffledAnswers.map((answer, answerIndex) => (
 <button
 key={answer}
 className={

 "px-4 py-2 text-white rounded-md mr-2 " +
 (!highlightButtons ? "bg-blue-500" : "bg-green-500")
 }
 id={answer}
 disabled={buttonsDisabled}
 onClick={() => handleClick(question)}
 >
 {answer}
 </button>
 ))} */}
      {buttons.map((buttonText, i) => (
        <button
          key={i}
          className={
            // hover:bg-slate-600 m-0 p-2 hover:rounded-md active:bg-purple-600 focus:ring focus:outline-none focus:ring-green-700 focus:rounded-md

            "px-4 py-2 text-white rounded-md mr-2 " +
            (highlightButtons ? "bg-green-500" : "bg-blue-500")
          }
          id={buttonText}
          disabled={buttonsDisabled}
          onClick={() => handleClick(question)}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
