import { Directive, ElementRef, OnInit, Renderer } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector:'[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit{
    constructor(
        private element: ElementRef<any>,
        private rendered: Renderer,
        private userService: UserService
    ){}

    ngOnInit(): void {
        !this.userService.isLogged()
           && this.rendered.setElementStyle(this.element.nativeElement,'display','none');
    }
}