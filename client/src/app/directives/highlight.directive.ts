import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[tohHighlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
