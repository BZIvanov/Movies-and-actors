import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {

  constructor(private myElement: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') handleClick() {
    let button = this.myElement.nativeElement.children[0];
    //button.classList.add("hideIt");
    let list = this.myElement.nativeElement.children[1];
    console.log(this.myElement)
    //console.log(this.renderer)
  }
}
