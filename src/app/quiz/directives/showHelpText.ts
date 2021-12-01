import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowHelpTextDirective]'
})
export class ShowHelpTextDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  isShow = false;
  styleShow = '';
  @HostListener('click') changeStyle() {
    this.styleShow = this.isShow ? 'none': 'block';
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'display', this.styleShow);
    this.isShow = !this.isShow;
  }
}
