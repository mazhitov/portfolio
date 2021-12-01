import { Component, Input } from '@angular/core';
import { Question } from '../shared/question.model';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent  {
  @Input() question!: Question;
  @Input() index = 0;
  answerInput = '';
  statusOfAnswer = '';
  submit = false;

  constructor(private questionsService: QuestionsService) {}

  onClickAnswer() {
    if(this.question.correctAnswer === this.answerInput) {
      this.question.statusOfAnswer = 'Correct';
      this.statusOfAnswer = 'Correct';
      this.questionsService.incrementResult();
    } else {
      this.question.statusOfAnswer = 'Incorrect';
      this.statusOfAnswer = 'Incorrect';
    }
    this.submit = true;
  }

  getQuestionHelpText() {
    return this.question.helpText;
  }

}
