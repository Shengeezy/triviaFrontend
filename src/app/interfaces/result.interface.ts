export interface Result {
  correctAnswers: number; // Number of correct answers
  totalQuestions: number; // Total number of questions
  feedback: { question: string, userAnswer: string, correctAnswer: string }; // Feedback on wrong questions
}
