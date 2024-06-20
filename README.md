
# Quiz App

This is a simple React-based Quiz Application that displays a series of questions and provides a result summary at the end. The quiz data is fetched from local storage.

## Tech Stack

Typescript , React 

## Features

- Displays a series of quiz questions.
- Tracks user's answers and shows the correct answer if the user's answer is incorrect.
- Provides a summary of results at the end.
- Option to retry the quiz.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/quiz-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd quiz-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

## Storing Quiz Data

Ensure that your quiz data is stored in local storage before running the app. Here is an example of how you can do this in your browser's console:

```javascript
const quizData: Quiz = {
  title: "Basic JavaScript Quiz",
  questions: [
    {
      question: "What is the output of `console.log(typeof null)`?",
      options: [
        { id: 1, option: "null", isCorrect: false },
        { id: 2, option: "undefined", isCorrect: false },
        { id: 3, option: "object", isCorrect: true },
        { id: 4, option: "function", isCorrect: false },
      ],
    },
    // Add more questions here...
  ],
};

// Store the quiz data in local storage
localStorage.setItem('quizData', JSON.stringify(quizData));

```
3. Project Structure 
```
quiz-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Question.tsx
│   │   ├── Result.tsx
│   │   └── ...
│   ├── constants/
│   │   ├── questions.ts
│   │   └── ...
│   ├── types/
│   │   └── types.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

4. Types 


```
export type Quiz = {
  title: string;
  questions: Question[];
};

export type Question = {
  question: string;
  options: Option[];
};

export type Option = {
  id: number;
  option: string;
  isCorrect: boolean;
};
```