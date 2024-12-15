import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angularclient';
  quizStarted = false;

  constructor(private router: Router) {}

  startQuiz(): void {
    this.quizStarted = true;
    this.router.navigate(['/quiz']);
  }

  showResults(): void {
    this.router.navigate(['/results']); // Redirect to the results page
  }
}
