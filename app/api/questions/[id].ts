// pages/api/questions/[id].ts

import { NextApiRequest, NextApiResponse } from "next";
const fetchQuestions = async () => {
  try {
    const response = await fetch("/api/questions");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return []; // Return an empty array or handle the error as needed
  }
};

const questionsData = await fetchQuestions();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query; // Get the 'id' parameter from the URL
    const questionId = Number(id);

    if (isNaN(questionId)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    // Find the question with the specified ID
    const question = questionsData.find((q) => q.id === questionId);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.status(200).json({ question });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
