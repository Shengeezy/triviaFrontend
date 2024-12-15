import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ApiService} from '../services/api.service';
import {Result} from '../interfaces/result.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  imports: [CommonModule]
})
export class ResultsComponent implements OnInit {
  results: Result = { score: 0, totalQuestions: 0, answerInfo: [] };

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResult().subscribe((results)=> {
      this.results = results;
      console.log(this.results);
    })
  }

  retryQuiz(): void {
    this.router.navigate(['/quiz']); // Navigate back to the quiz component
  }
}
