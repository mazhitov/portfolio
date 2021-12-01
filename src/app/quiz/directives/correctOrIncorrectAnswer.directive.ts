import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCorrectOrIncorrectAnswer]'
})

export class CorrectOrIncorrectAnswerDirective {
  @Input() set appCorrectOrIncorrectAnswer (status:string) {
    if(status === 'Correct') {
      this.statusClass = this.correctClass;
      this.addClass();
    } else if(status === 'Incorrect') {
      this.statusClass = this.inCorrectClass;
      this.addClass();
    }
  }
  correctClass = 'btn-success';
  inCorrectClass = 'btn-danger';
  statusClass = 'border-0';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  addClass() {
    this.renderer.addClass(this.el.nativeElement, this.statusClass);
  }
}
