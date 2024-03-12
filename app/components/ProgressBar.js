/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const ProgressBar = ({ total, current }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="flex justify-center items-center">
      <div css={progressBar} className="mr-4">
        <div css={[progressBarInner, { width: `${percentage}%` }]}></div>
      </div>
      <div>{percentage}%</div>
    </div>
  );
};

const progressBar = css`
  width: 85%;
  height: 7px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const progressBarInner = css`
  height: 100%;
  border-radius: 10px;
  background-color: green;
`;
