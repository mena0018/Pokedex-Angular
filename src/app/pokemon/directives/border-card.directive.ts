import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[pkmnBorderCard]'
})

export class BorderCardDirective {

  
  private initialColor: string = "#ececec";
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  
  constructor( private el: ElementRef) {
    this.setBoxShadow(this.initialColor);
    this.setHeight(this.defaultHeight);
  }
  
  @Input('pkmnBorderCard') borderColor: string; 
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBoxShadow(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBoxShadow(this.initialColor); 
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBoxShadow(color: string) {
    this.el.nativeElement.style.boxShadow = `0 0 10px 1px ${color}`;
  }
}
 