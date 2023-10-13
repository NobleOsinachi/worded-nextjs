import React, { useEffect, useState } from "react";
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

  const shuffleButtons = (question: Question) => {
    return shuffleArray([question.answers.correct, question.answers.incorrect]);
  };

  const [buttons, setButtons] = useState(shuffleButtons(question));

  useEffect(() => {
    // Shuffle the buttons only ONCE when the component initially renders.
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

      {buttons.map((buttonText, buttonIndex) => (
        <button
          key={buttonIndex}
          className={
            /* hover:bg-slate-600 hover:rounded-md active:bg-purple-600 focus:ring focus:outline-none focus:ring-green-700 focus:rounded-md */

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
