import { Quiz } from "../type";

export const questions: Quiz = {
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
        {
            question: "Which company developed JavaScript?",
            options: [
                { id: 1, option: "Microsoft", isCorrect: false },
                { id: 2, option: "Apple", isCorrect: false },
                { id: 3, option: "Netscape", isCorrect: true },
                { id: 4, option: "Google", isCorrect: false },
            ],
        },
        {
            question: "Which of the following is not a JavaScript data type?",
            options: [
                { id: 1, option: "String", isCorrect: false },
                { id: 2, option: "Number", isCorrect: false },
                { id: 3, option: "Boolean", isCorrect: false },
                { id: 4, option: "Character", isCorrect: true },
            ],
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                { id: 1, option: "function:myFunction()", isCorrect: false },
                { id: 2, option: "function myFunction()", isCorrect: true },
                { id: 3, option: "function = myFunction()", isCorrect: false },
                { id: 4, option: "create myFunction()", isCorrect: false },
            ],
        },
        {
            question: "Which of the following is a JavaScript framework?",
            options: [
                { id: 1, option: "React", isCorrect: true },
                { id: 2, option: "Laravel", isCorrect: false },
                { id: 3, option: "Django", isCorrect: false },
                { id: 4, option: "Spring", isCorrect: false },
            ],
        },
    ],
};
