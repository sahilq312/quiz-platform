import React from 'react';
import { Question } from '../type';

interface ResultProps {
  userAnswers: boolean[];
  questions: Question[];
  resetQuiz?: () => void;
}

const Result: React.FC<ResultProps> = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions{' '}
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => (
          <li key={index} data-correct={userAnswers[index]}>
            Q{index + 1}. {question.question}
            <b>
              {userAnswers[index]
                ? ''
                : `- ${question.options.find((ans) => ans.isCorrect)?.option}`}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
