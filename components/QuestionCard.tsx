import React, { Component } from "react";
import { shuffleArray } from "@/utils/shuffleArray";
import { Question } from "@/app/api/questions/route";

interface QuestionCardProps {
  question: Question;
}

class QuestionCard extends Component<QuestionCardProps> {
  constructor(props: QuestionCardProps) {
    super(props);
  }

  state = {
    buttonsDisabled: false,
    highlightButtons: false,
    count: 0,
    score: 0,
    questionsAnswered: [],
  };

  componentDidUpdate(prevProps: QuestionCardProps, prevState: any) {
    if (this.state.count === 10) {
      alert("completed!!!");
    }
  }

  onClick = (question: Question) => {
    this.setState({
      buttonsDisabled: true,
      highlightButtons: true,
      count: this.state.count + 1,
    });
  };

  render() {
    const { buttonsDisabled, highlightButtons } = this.state;
    const { question } = this.props;

    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h5 className="text-lg font-semibold mb-2">Question {question.id}</h5>
        <p className="text-gray-700 mb-4">
          Which word is{" "}
          <span className="italic font-bold">{question.type}</span> to{" "}
          <span className="italic font-bold">{question.word}</span>
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
            onClick={() => this.onClick(question)}
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
            onClick={() => this.onClick(question)}
          >
            {question.answers.incorrect}
          </button>,
        ])}
      </div>
    );
  }
}

export default QuestionCard;
