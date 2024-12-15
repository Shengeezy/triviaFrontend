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
  results: { question: string, userAnswer: string, correctAnswer: string }[] = []; // Placeholder for result data

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the results from the navigation state
    console.log(this.router.getCurrentNavigation()?.extras.state);
    const navigation = this.router.getCurrentNavigation();
    this.results = navigation?.extras.state?.['results'].feedback || [];

    // Calculate score and total questions
    this.score = navigation?.extras.state?.['results'].correctAnswers || 0;
    this.totalQuestions = navigation?.extras.state?.['results'].totalQuestions || 0;
    console.log(this.results);
    console.log(this.score);
    console.log(this.totalQuestions);
  }


    // this.results = navigation?.extras.state?.['results'];
    // // Mock data for testing
    // this.results = [
    //   {
    //     question: 'What is the capital of France?',
    //     userAnswer: 'Paris',
    //     correctAnswer: 'Paris',
    //     correct: true
    //   },
    //   {
    //     question: 'Which planet is known as the Red Planet?',
    //     userAnswer: 'Venus',
    //     correctAnswer: 'Mars',
    //     correct: false
    //   }
    // ];
    // this.score = this.results.filter(r => r.correct).length;
    // this.totalQuestions = this.results.length;
  // }

  retryQuiz(): void {
    this.router.navigate(['/quiz']); // Navigate back to the quiz component
  }
}
