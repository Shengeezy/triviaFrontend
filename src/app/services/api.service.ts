import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { Result } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root', // Ensures this service is provided at the root level
})
export class ApiService {
  private apiUrl = 'http://localhost:8080'; // Base URL of your backend server

  constructor(private http: HttpClient) {}

  /**
   * Fetch questions from the backend
   * @returns Observable<Question[]> - List of quiz questions
   */
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions`);
  }

  /**
   * Submit user answers to the backend and get the result
   * @param userAnswers - Array of user-selected answers
   * @returns Observable<Result> - Evaluation result
   */
  checkAnswers(userAnswers: string[]): Observable<Result> {
    return this.http.post<Result>(`${this.apiUrl}/checkanswers`, userAnswers);
  }
}
