import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight], input' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'purple';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
