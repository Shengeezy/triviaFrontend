import { provideRouter, RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }, // Default route
  { path: 'quiz', component: QuizComponent }, // Quiz route
  { path: 'results', component: ResultsComponent }, // Results route
];

export const appRoutes = RouterModule.forRoot(routes);
