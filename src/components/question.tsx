import React from 'react';
import { Question } from '../type';


interface QuestionProps {
  question: Question;
  onAnswerClick?: (isCorrect: boolean) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="border w-4/5 p-10 rounded-xl mt-3">
      <h2 className=' text-3xl p-6'>{question.question}</h2>
      <ul className="options">
        {question.options.map((option) => (
          <li key={option.id}>
            <button onClick={() => onAnswerClick(option.isCorrect)}>
              {option.option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
