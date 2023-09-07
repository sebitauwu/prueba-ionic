import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner,BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers:[BarcodeScanner]
})
export class HomePage implements OnInit {


  mensaje: string = "";
  qrText: string = "";

  constructor(private barcodeScanner:BarcodeScanner,private rutaActiva:ActivatedRoute) { 
   

  
      this.rutaActiva.queryParams.subscribe(params =>{
    
        if(params['usuario'])
        {
          this.mensaje = params['usuario'];
        }
      
      })
     
  }
  ngOnInit(){ 
  }

  readBarcode(){ 
    let opts: BarcodeScannerOptions = {
      prompt: 'coloque el codigo qr en el recuadro'
    }
    this.barcodeScanner.scan(opts).then(barcodeData=>{
      this.qrText = barcodeData.text;
    }).catch(err=>{
      console.log('error')
    });
  }
}
  



  
  
  
  






