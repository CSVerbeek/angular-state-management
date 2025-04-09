import { Directive, effect, input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[asmRerenderOnChange]',
})
export class RerenderOnChangeDirective {
  readonly asmRerenderOnChange = input.required<any>();

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
    effect(() => {
      const _trigger = this.asmRerenderOnChange();
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    });
  }
}
