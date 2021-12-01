export class Question {
  constructor(
    public questionText: string,
    public correctAnswer: string,
    public helpText: string,
    public statusOfAnswer: string,
  ) {}
}
