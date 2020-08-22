import { Directive,HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen =false;
  @HostListener('click')
  onClick(){
    this.isOpen = !this.isOpen;
  }
  constructor(private eleRef:ElementRef,private renderer: Renderer2) { }

}
