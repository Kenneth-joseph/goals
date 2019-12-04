import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

constructor(private elem: ElementRef ) {}
@HostListener('click') onclick() {
  this.textDec( 'red');
}

@HostListener('dblclick') onDoubleClicks() {
  this.textDec('black');
}
private textDec(line: string) {
  this.elem.nativeElement.style.color = line;

}


}
