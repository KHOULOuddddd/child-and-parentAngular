import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  
  constructor(private el: ElementRef) { }
//Handling user events
  /**@HostListener('mouseenter') onMouseEnter() {
    this.directCol('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.directCol('green');
  }*/

//Applying an attribute directive
  private directCol(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.margin = "20px";
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.padding = "10px";
    this.el.nativeElement.style.width = "150px";
  }
  @Input() defaultColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.directCol(this.defaultColor || 'red');
  }

  
  
}
