import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/angular/standalone';
import { ComponentsModule } from 'src/app/components/components-module';
import{ AlertController,  } from'@ionic/angular';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonContent, ComponentsModule, CommonModule, FormsModule, IonButton]
})
export class AlertPage implements OnInit {
onClick() {
  this.presentAlert()
}


  ngOnInit() {
  }
  constructor( private alertController: AlertController) {}


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      backdropDismiss:false,
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      backdropDismiss:false,
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text:'ok!',
          handler:()=>{console.log('ok!')}
        },
        {
          text:'cancelar',
          role:'cancel',
          cssClass:'rojo'
        },
      ],
    });

    await alert.present();
  }
  async presentAlertPromp(){
    const alert=await this.alertController.create({
      header:'prompt!',
      inputs:[
        {
          name:'name1',
          type:'text',
          placeholder:'placeholder 1'
        },
        {
          name:'name2',
          type:'text',
          id:'name2-id',
          value:'hello',
          placeholder:'placeholder 2'
        },
        {
          name:'paragraph',
          id:'paragraph',
          type:'textarea',
          placeholder:'placeholder 3'
        },
        {
          name:'name3',
          value:'http://ionicframework.com',
          type:'url',
          placeholder:'Favorite site ever'
        },
        {
          name:'name4',
          type:'date',
          min:'2015-03-01',
          max:'2025-01-12'
        },
        {
          name:'name5',
          type:'date',
          min:'2015-03-01',
          max:'2025-01-12'
        },
        {
          name:'name6',
          type:'number',
          min:-5,
          max:10,
        },
        {
            name:'name7',
            type:'number'
        },
        {
          name:'name8',
          type:'password',
          placeholder:'advanced attributes',
          cssClass:'specialClass',
          attributes:{
            maxlength:4,
            inputmode:'decimal'
          }
        },
      ],
      buttons:[
        {
          text:'cancel',
          role:'cancel',
          cssClass:'secondary',
          handler:()=>{
            console.log('confirm cancel')
          }
        },
        {
          text:'ok',
          handler:(data:any)=>{
            console.log(data);
          }
        }
      ]
    });
    await alert.present();
  }
}
