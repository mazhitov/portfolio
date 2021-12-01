import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './shared/questions.service';
import { Question } from './shared/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuestionsService]
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  result = 0;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(){
    this.questions = this.questionsService.getQuestions();
    this.result = this.questionsService.getResult();
    this.questionsService.resultChange.subscribe(result => {
      return this.result = result;
    });
  }
}
