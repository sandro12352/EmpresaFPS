import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {
  private serviceID = 'service_rldlr1r';    // <-- Tu Service ID
  private templateID = 'template_wu4vkua'; // <-- Tu Template ID
  private publicKey = 'BjNSOMXHgMaV2Z7eC';     // <-- Tu Public Key

  constructor() { }

 enviarCorreo(data: any): Promise<any> {
  return emailjs.send(
    this.serviceID,
    this.templateID,
    data,
    this.publicKey
  );
}

 


  
}
