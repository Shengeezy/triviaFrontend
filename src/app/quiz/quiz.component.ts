import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../interfaces/question.interface';
import { ApiService } from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  imports: [CommonModule]
  // providers: [ApiService]
})
export class QuizComponent implements OnInit {
  currentQuestionIndex: number = 0;
  questions: any[] = []; // Placeholder for quiz questions
  selectedAnswers: { question: string, answer: string}[]=[]; // Dictionary to store question-answer pairs

  constructor(private apiService: ApiService, private router: Router) {} // Injected ApiService

  ngOnInit(): void {
    // Fetch questions from the backend
    this.apiService.getQuestions().subscribe(
      (data: Question[]) => {
        this.questions = data; // Assign fetched questions
      }
    );
  }


  // Method to handle answer selection
  selectAnswer(answer: string, question: string): void {
    if (!this.selectedAnswers[this.currentQuestionIndex]) {
      this.selectedAnswers.push({answer: answer, question: question});
    }
    else {
      this.selectedAnswers[this.currentQuestionIndex].answer = answer;
      this.selectedAnswers[this.currentQuestionIndex].question = question;
    }
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

  // Method to submit the quiz
  submitQuiz(): void {
    console.log("Submitted Answers:", this.selectedAnswers);
    // You can send selectedAnswers to the backend here
    this.apiService.checkAnswers(this.selectedAnswers)
    this.router.navigate(['/results']);
  }
}
