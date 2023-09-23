import { Directive, ElementRef, HostListener, Input, Renderer } from "@angular/core";

@Directive({
    selector:'[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{
      constructor(private el: ElementRef,  private render: Renderer){}

      //Informar como parametro o nome do evento
      @HostListener('mouseover')
      darkenOn(){
          this.render.setElementStyle(this.el.nativeElement,'filter',`brightness(70%)`);
      }

      @HostListener('mouseleave')
      darkenOff(){
        this.render.setElementStyle(this.el.nativeElement,'filter',`brightness(100%)`);
      }
}
