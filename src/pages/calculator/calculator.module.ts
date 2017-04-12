import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Calculator } from './calculator';

@NgModule({
  declarations: [
    Calculator,
  ],
  imports: [
    IonicPageModule.forChild(Calculator),
  ],
  exports: [
    Calculator
  ]
})
export class CalculatorModule {}
