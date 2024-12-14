import { provideRouter, RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }, // Redirect from the root to the quiz page
  { path: 'quiz', component: QuizComponent }, // Quiz route
  { path: 'results', component: ResultsComponent }, // Results route
];

export const appRoutes = RouterModule.forRoot(routes);
