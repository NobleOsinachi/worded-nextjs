import { QuestionType } from "@/types";

interface QuestionCardProps {
  id: number;
  questionType: QuestionType;
  word: string;
  optionA: string;
  optionB: string;
}
const QuestionCard = ({
  id,
  questionType,
  word,
  optionA,
  optionB,
}: QuestionCardProps) => {
  function compare(id: number, optionA: string): void {
    console.log(id, optionA);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h5 className="text-lg font-semibold mb-2">Question {id}</h5>
      <p className="text-gray-700 mb-4">
        Which word is <span className="italic font-bold">{questionType}</span>{" "}
        to <span className="italic font-bold">{word}</span>
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        id={optionA}
        // onClick={() => compare(id, optionA)}
      >
        {optionA}
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        id={optionB}
        // onClick={() => compare(id, optionB)}
      >
        {optionB}
      </button>
    </div>
  );
};

export default QuestionCard;
