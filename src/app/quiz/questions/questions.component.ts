import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/question.model';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions!:Question[];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
  }
}
