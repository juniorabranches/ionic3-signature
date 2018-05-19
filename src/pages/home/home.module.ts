import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SignaturePadModule
  ],
  providers: [

  ]
})
export class HomePageModule {}
