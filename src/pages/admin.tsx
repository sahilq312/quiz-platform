import { useEffect, useState } from 'react';
import { Question, Quiz } from '../type';


/* type Question = {
  question: string,
  options: Option[]
}

type Option = {
  id: number,
  option: string,
  isCorrect: boolean
} */

const Admin = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState<Question>({
    question: '',
    options: [
      { id: 1, option: '', isCorrect: false },
      { id: 2, option: '', isCorrect: false },
      { id: 3, option: '', isCorrect: false },
      { id: 4, option: '', isCorrect: false }
    ]
  });
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedQuiz = localStorage.getItem('quiz');
    if (savedQuiz) {
      setQuiz(JSON.parse(savedQuiz));
    }
  }, []);

  const handleOptionChange = (id: number, field: string, value: string | boolean) => {
    const updatedOptions = question.options.map(opt => {
      if (opt.id === id) {
        return { ...opt, [field]: value };
      }
      if (field === 'isCorrect' && value === true) {
        return { ...opt, isCorrect: false };
      }
      return opt;
    });
    setQuestion({ ...question, options: updatedOptions });
  };

  const addQuestion = () => {
    if (!question.question.trim()) {
      setError("Question text cannot be empty.");
      return;
    }

    const emptyOptions = question.options.some(opt => !opt.option.trim());
    if (emptyOptions) {
      setError("All options must have text.");
      return;
    }

    const correctOptionsCount = question.options.filter(opt => opt.isCorrect).length;
    if (correctOptionsCount !== 1) {
      setError("Exactly one option must be marked as correct.");
      return;
    }

    setQuestions([...questions, question]);
    setQuestion({
      question: '',
      options: [
        { id: 1, option: '', isCorrect: false },
        { id: 2, option: '', isCorrect: false },
        { id: 3, option: '', isCorrect: false },
        { id: 4, option: '', isCorrect: false }
      ]
    });
    setError(null);
  };

  const createQuiz = () => {
    if (!quizTitle.trim()) {
      setError("Quiz title cannot be empty.");
      return;
    }

    if (questions.length === 0) {
      setError("At least one question must be added.");
      return;
    }

    const newQuiz: Quiz = {
      title: quizTitle,
      questions: questions
    };

    setQuiz(newQuiz);
    localStorage.setItem('quiz', JSON.stringify(newQuiz));
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-md">
      <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); addQuestion(); }}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">Quiz Title</label>
          <input 
            value={quizTitle} 
            type="text"
            onChange={(e) => setQuizTitle(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">Question</label>
          <input 
            value={question.question} 
            type="text"
            onChange={(e) => setQuestion({ ...question, question: e.target.value })}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {question.options.map((item) => (
            <li key={item.id} className="list-none flex gap-2 items-center">
              <select 
                value={item.isCorrect.toString()}
                onChange={(e) => handleOptionChange(item.id, 'isCorrect', e.target.value === 'true')}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
              <input 
                value={item.option}
                onChange={(e) => handleOptionChange(item.id, 'option', e.target.value)}
                className="p-2 border rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </li>
          ))}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Add Question</button>
      </form>

      <button onClick={createQuiz} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">Create Quiz</button>

      <div className="mt-6 text-black">
        <h2 className="text-2xl font-semibold">Added Questions</h2>
        <ul className="mt-4 space-y-4">
          {questions.map((q, index) => (
            <li key={index} className="bg-white  p-4 rounded-md shadow-md">
              <strong className="text-lg">Question {index + 1}: {q.question}</strong>
              <ul className="mt-2 space-y-2">
                {q.options.map((opt) => (
                  <li key={opt.id} className={`${opt.isCorrect ? "text-green-500" : ""}`}>
                    {opt.option} {opt.isCorrect ? "(Correct)" : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {quiz && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Quiz Created</h2>
          <p className="mt-2 text-lg">Title: {quiz.title}</p>
          <ul className="mt-4 space-y-4">
            {quiz.questions.map((q, index) => (
              <li key={index} className="bg-white p-4 rounded-md shadow-md">
                <strong className="text-lg">Question {index + 1}: {q.question}</strong>
                <ul className="mt-2 space-y-2">
                  {q.options.map((opt) => (
                    <li key={opt.id} className={`${opt.isCorrect ? "text-green-500" : ""}`}>
                      {opt.option} {opt.isCorrect ? "(Correct)" : ""}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
