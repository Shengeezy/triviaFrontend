import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  // styleUrls: ['./results.component.css']
  imports: [CommonModule]
})
export class ResultsComponent implements OnInit {
  score: number = 0;
  totalQuestions: number = 0;
  results: any[] = []; // Placeholder for result data

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Mock data for testing
    this.results = [
      {
        question: 'What is the capital of France?',
        userAnswer: 'Paris',
        correctAnswer: 'Paris',
        correct: true
      },
      {
        question: 'Which planet is known as the Red Planet?',
        userAnswer: 'Venus',
        correctAnswer: 'Mars',
        correct: false
      }
    ];
    this.score = this.results.filter(r => r.correct).length;
    this.totalQuestions = this.results.length;
  }

  retryQuiz(): void {
    this.router.navigate(['/quiz']); // Navigate back to the quiz component
  }
}
