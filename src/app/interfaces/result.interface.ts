export interface Result {
  score: number; // Number of correct answers
  totalQuestions: number; // Total number of questions
  answerInfo: { question: string, userAnswer: string, correctAnswer: string }[]; // Feedback on wrong questions
}
