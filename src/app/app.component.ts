import { Component, NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { zippyDeps } from './zippy.component';

@Component({
  selector: 'zippy-app',
  template: `
    <app-zippy label="Click me">
      {{title | capitalize}}
    </app-zippy>
  `,
})
export class AppComponent {
  title = 'Hello World';
}

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    zippyDeps,
  ],
})
class AppRenderModule {}