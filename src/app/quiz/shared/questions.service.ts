import { Question } from './Question.model';
import { EventEmitter } from '@angular/core';

export class QuestionsService {
  resultChange = new EventEmitter<number>();
  private correctResult = 0;
  private questions: Question[] = [
    new Question('questionText', 'correctAnswer', 'helpText', 'no answer'),
    new Question('questionText', 'correctAnswer', 'helpText', 'no answer'),
    new Question('questionText', 'correctAnswer', 'helpText', 'no answer'),
    new Question('questionText', 'correctAnswer', 'helpText', 'no answer'),
    new Question('questionText', 'correctAnswer', 'helpText', 'no answer'),
  ];

  getQuestions() {
    return this.questions.slice();
  }

  incrementResult() {
    if(this.correctResult <= this.questions.length){
      this.correctResult++;
      this.resultChange.emit(this.correctResult);
    }
  }

  getResult() {
    return this.correctResult;
  }
}
