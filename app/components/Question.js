/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState } from "react";

export const Question = ({ data, handleAnswer, currentQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestion]);

  return (
    <>
      {currentQuestion + 1 && (
        <div css={questionContainer} className="mx-48">
          <h2>{`${currentQuestion + 1}. ${data.question}`}</h2>
          <div>
            {data.options.map((option, index) => (
              <div key={index} className="mt-4">
                <input
                  type="radio"
                  id={`option-${currentQuestion}-${index}`} // Unique ID for each input
                  name="option"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                />
                <label
                  css={optionButton}
                  htmlFor={`option-${currentQuestion}-${index}`}
                  className="ml-4"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => handleAnswer(selectedAnswer)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const questionContainer = css`
  font-size: 20px;
  margin-top: 50px;
`;

const optionButton = css`
  font-size: 16px;
  cursor: pointer;
`;
