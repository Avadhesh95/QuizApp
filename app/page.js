"use client";

/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import Head from "next/head";
import { css } from "@emotion/react";
import { Question } from "./components/Question";
import { ProgressBar } from "./components/ProgressBar";

const questionsData = [
  {
    question:
      "According to Warren Buffet, what is critical when it comes to stock investing?",
    options: [
      "Stock price",
      "Stock quantity",
      "Stock volume",
      "Stock dividend",
    ],
    correctAnswer: "Stock price",
  },
  {
    question: "Which type of businesses is preferred in the 'Money Mantra'?",
    options: ["Consumer services", "Communication", "Manufacturing", "Retail"],
    correctAnswer: "Manufacturing",
  },
  {
    question:
      "What type of products can lead to a consumer monopoly according to 'Money Mantra'?",
    options: [
      "Everyday use products",
      "Unique products",
      "Luxury items",
      "High-price items",
    ],
    correctAnswer: "Everyday use products",
  },
  {
    question: "What factor determines the rate of return in stock investing?",
    options: ["Stock price", "Stock quantity", "Stock sector", "Stock sales"],
    correctAnswer: "Stock price",
  },
  {
    question:
      "According to the text, what quality is essential for successful investment?",
    options: [
      "Patience and perseverance",
      "Impulsiveness",
      "Overconfidence",
      "Aggressiveness",
    ],
    correctAnswer: "Patience and perseverance",
  },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  // useEffect(() => {
  //   fetch(
  //     "https://preprod2.kukufm.com/api/v1/channels/quiz/?show_id=204228&mode=easy",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization:
  //           "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoyOTM2NDE4MCwiZXhwIjoxNzA5MDU4NjAwfQ.5DnOBeZ8Nwd0sdPlyBT9on_6xM5DDovSjdwf-7JAOWx_ppY1k7qi1HP6htwf_RFoBFfr5XnY9VYdWJwiHkCTRg",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div css={container}>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Quiz App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={header}
        className="text-2xl text-center bg-red-500 text-white font-bold"
      >
        Quiz App
      </div>

      {currentQuestion < questionsData.length ? (
        <>
          <ProgressBar
            total={questionsData.length}
            current={currentQuestion + 1}
          />
          <Question
            data={questionsData[currentQuestion]}
            currentQuestion={currentQuestion}
            handleAnswer={handleAnswer}
          />
        </>
      ) : (
        <div className="text-center mt-12">
          <h2 className="text-2xl text-green-400">Quiz Completed!</h2>
          <p className="text-xl mt-12">
            Your Score: {score}/{questionsData.length}
          </p>
          <button
            onClick={resetQuiz}
            className="mt-6 bg-blue-500 hover:bg-blue-700 px-8 py-2 text-white font-bold rounded"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

const container = css`
  // text-align: center;
`;

const header = css`
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 50px;
`;
