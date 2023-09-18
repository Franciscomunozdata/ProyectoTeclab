import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modal-presupuesto',
  templateUrl: 'modal-presupuesto.component.html',
  styleUrls: ['modal-presupuesto.component.css']
})
export class ModalPresupuestoComponent {
  @ViewChild(IonModal)  modal: IonModal | undefined;
  public formGroup : FormGroup;
  public name: string = '';
  public whatsappNumber = '5491140788374';
  public isModalOpen:boolean = false

  constructor(
    private modalCtrl:ModalController
  ){  
    this.formGroup = new FormGroup({
      name: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(20)])),
      surname: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(20)])),
      phone: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(10)])),
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      mensaje: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(500)])),     
    });
  }
   
  cancel() {      
    this.modalCtrl.dismiss();
  }
 
  sendData(){  
    if(this.formGroup.valid){
      let name = this.formGroup.controls['name'].value;
      let surname = this.formGroup.controls['surname'].value;
      let phone = this.formGroup.controls['phone'].value;
      let email = this.formGroup.controls['email'].value;
      let mensaje = this.formGroup.controls['mensaje'].value
      var message = 'Hola, un gusto saludarles, mi nombre es';
      message += ` ${name + ' ' + surname}, y quiero solicitud un presupuesto relacionada con ${mensaje}.
                        Gracias por su tiempo,comparto teléfono ${phone} y correo electrónico ${email}. Aguardo su respuesta.`;                 
      const whatsappUrl = `https://wa.me/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      this.modalCtrl.dismiss();
    }      
  }  
}