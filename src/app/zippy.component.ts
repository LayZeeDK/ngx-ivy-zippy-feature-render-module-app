import { Component, Input, ɵmarkDirty } from '@angular/core';

import { ButtonDirective } from './button.directive';

@Component({
  selector: 'app-zippy',
  template: `
    <button appButton (appClick)="onToggle()">
      {{label}}
    </button>

    <div [hidden]="!isExpanded">
      <ng-content></ng-content>
    </div>
  `,
})
export class ZippyComponent {
  @Input()
  label = 'Toggle';

  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
    ɵmarkDirty(this);
  }
}

export const zippyDeps = [
  ZippyComponent,
  ButtonDirective,
];