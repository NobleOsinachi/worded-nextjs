"use client";
import QuestionCard from "@/components/QuestionCard";
import ScoreCard from "@/components/ScoreCard";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Question } from "./api/questions/route";
// import Footer from "@/components/Footer";

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <article className="w-4/5 mx-auto">
          <p className="p-2 text-center  text-2xl font-bold">Worded Game</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* {JSON.stringify(questions)} */}

            {questions?.map((question: Question) => (
              <QuestionCard
                key={question.id}
                question={question}
              ></QuestionCard>
            ))}
          </div>
          <hr />
          <br />
        </article>
      </div>

      {/* <Footer></Footer> */}
    </>
  );
}
