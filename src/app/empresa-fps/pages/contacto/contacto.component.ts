import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnviarEmailService } from '../../services/enviar-email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @ViewChild('successModal') successModal!: ElementRef;

  public myForm: FormGroup;

  constructor(private fb: FormBuilder,private serviceEnviarEmail:EnviarEmailService) {
    this.myForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(3)]],
      telefono: [null, [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      correo: ['', [Validators.required, Validators.email]],
      tipoConsulta: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  showModal() {
    if (this.successModal) {
    const modal = new (window as any).bootstrap.Modal(this.successModal.nativeElement);
    
    modal.show();
      }
    }

  onSave() {
  if (this.myForm.invalid) {
    this.myForm.markAllAsTouched();
    return;
  }

  this.serviceEnviarEmail.enviarCorreo(this.myForm.value)
    .then(() => {
      this.showModal();  // Mostrar modal solo si se envió correctamente
      this.myForm.reset();
    })
    .catch((error) => {
      console.error('Error enviando correo:', error);
      // Aquí puedes mostrar un mensaje de error si deseas
    });
}
}
