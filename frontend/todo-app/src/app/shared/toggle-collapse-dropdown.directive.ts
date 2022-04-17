import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleCollapseDropdown]',
  exportAs: 'toggleCollapseDropdown',
})
export class ToggleCollapseDropdownDirective {
  isOpen = false;

  @HostListener('document:click', ['$event']) toggleOrCollapse(event: Event): void {
    this.isOpen = this._elementRef.nativeElement.contains(event.target) ? true : false;
  }

  constructor(private _elementRef: ElementRef) { }

}
