import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { RouletteService } from '../shared/roulette.service';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective {
  @Input() set appColor(number: number) {
    this.numberClass = this.rouletteService.getColor(number);
    this.addClass();
  }
  numberClass = '';
  constructor(private el: ElementRef, private renderer: Renderer2, private rouletteService: RouletteService) {}

  addClass() {
    this.renderer.addClass(this.el.nativeElement, this.numberClass);
  }
}
