import React, { useEffect, useState } from "react";
//import { questions } from '../lib/Dummy';
import QuestionComponent from "../components/question";
import Result from "../components/result";
import { Question, Quiz } from "../type";
//import { Link } from "react-router-dom";

const QuizApp: React.FC = () => {
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  useEffect(() => {
    const CreatedQuiz = localStorage.getItem("quiz");
    //console.log(CreatedQuiz);
    if (CreatedQuiz) {
      setQuizData(JSON.parse(CreatedQuiz));
    }
  }, []);

  const handleNextQuestion = (isCorrect: boolean) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  if (!quizData) {
    return <>NO Quiz Data</>;
  }

  return (
    <div className="App w-full flex flex-col items-center gap-10 max-h-screen">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5x">Basic JavaScript Quiz</h1>

      {/* Questions Component */}
      {currentQuestion < quizData.questions.length && (
        <QuestionComponent
          question={quizData.questions[currentQuestion] as Question}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* Result Component */}
      {currentQuestion === quizData?.questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={quizData.questions as Question[]}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default QuizApp;
