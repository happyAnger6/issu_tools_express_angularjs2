import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDeliverInfoComponent } from './module-deliver-info/module-deliver-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModuleDeliverInfoComponent
  ],
  declarations: [
    ModuleDeliverInfoComponent
  ]
})
export class SharedModule { }
