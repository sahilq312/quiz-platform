
import { Link } from "react-router-dom";
import "./App.css";
//import { questions } from "./lib/Dummy";




function App() {
  // Safely parse localStorage data
  /* const quizzesData = localStorage.getItem("Quizzes");
  const Quizzes: Quiz | null = quizzesData ? JSON.parse(quizzesData) : null;

  const createQuiz = () => {
    localStorage.setItem("Quizzes", JSON.stringify(questions));
  };
 */
  return (
    <div className=" flex flex-col items-center justify-center w-full min-h-screen gap-10 text-3xl font-extrabold">
      <div className=" leading-6 text-3xl font-bold">
          Quiz App
      </div>
      <div className="flex items-center gap-10">
              <Link
                to={"/quiz"}
                className="rounded-md bg-white px-3.5 py-2.5 text-xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Quiz
              </Link>
              <Link to={"/admin"} className="text-xl font-semibold leading-6 text-white">
                Create Quiz <span aria-hidden="true">→</span>
              </Link>
      </div>
          </div>
    
  );
}

export default App;
