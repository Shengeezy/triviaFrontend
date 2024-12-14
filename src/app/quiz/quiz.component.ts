import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  // styleUrls: ['./quiz.component.css']
  imports: [CommonModule]
})
export class QuizComponent implements OnInit {
  currentQuestionIndex: number = 0;
  questions: any[] = []; // Placeholder for quiz questions
  selectedAnswers: string[] = []; // To store selected answers

  ngOnInit(): void {
    // Load or generate questions here
    this.questions = [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars'
      }
    ];
  }

  // Method to handle answer selection
  selectAnswer(option: string): void {
    this.selectedAnswers[this.currentQuestionIndex] = option;
  }

  // Method to go to the next question
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // Method to go to the previous question
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
}
