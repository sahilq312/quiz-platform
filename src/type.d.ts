/* type Quiz = {
    title: string,
    description: string,
    questions: Question[]
}

type Question = {
    question: string,
    options: 
        { id: number, option: string, isCorrect: boolean },
        { id: number, option: string, isCorrect: boolean },
        { id: number, option: string, isCorrect: boolean },
        { id: number, option: string, isCorrect: boolean },

} */
type Quiz = {
    title: string,
    questions: Question[]
  }
  
  export type Question = {
    question: string,
    options: Option[]
  }
  
  type Option = {
    id: number,
    option: string,
    isCorrect: boolean
  }