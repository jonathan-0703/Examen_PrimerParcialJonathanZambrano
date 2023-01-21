import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage  {

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Guarde su informacion',
      backdropDismiss:false,
      buttons: ['OK','CANCEL'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apellidos',
        },
        {
          placeholder: 'Descripcion materna',
          type: 'textarea',
        },
        {
          placeholder: 'Ingrese URL',
          type: 'url',
        },
        {
          placeholder: 'Fecha de nacimiento',
          type: 'date',
        },
        {
          type: 'password',
          placeholder: 'Clave',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }

  

}
