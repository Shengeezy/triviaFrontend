import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  quizStarted = false;

  constructor(private router: Router) {}

  startQuiz(): void {
    this.quizStarted = true;
    this.router.navigate(['/quiz']); // Redirect to the quiz component
  }
}
