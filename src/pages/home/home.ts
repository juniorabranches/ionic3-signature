import { ViewChild, Component } from '@angular/core';
import { NavController, IonicPage, Platform } from 'ionic-angular';

import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePad } from 'angular2-signaturepad/signature-pad'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  widht: any;
  heigth: any;
  signatureImage: any;
  public signaturePadOptions: Object = {
    'minWidth' : 2,
    'canvasWidth' : 340,
    'canvasHeigth' : 280
  }

  constructor(private platform: Platform, public navCtrl: NavController) {
    this.platform.ready().then((readySource) => {
      this.widht = platform.width();
      this.heigth = platform.height();
    })
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeigth', canvas.offsetHeight);
  }

  ngAfterViewInit(){
    this.signaturePad.clear();
    this.canvasResize();
  }

  drawComplete(){
    this.signatureImage = this.signaturePad.toDataURL();
    console.log(this.signatureImage);
  }

  drawClear(){
    this.signaturePad.clear();
  }


}
