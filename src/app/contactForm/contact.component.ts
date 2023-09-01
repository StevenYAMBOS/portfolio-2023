import { ConnectionService } from '../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any> | undefined;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(fb: FormBuilder, private connectionService: ConnectionService) {

    this.contactForm = fb.group({
      'from': ['', Validators.compose([Validators.required, Validators.email])],
      'subject': ['', Validators.required],
      'message': ['', Validators.required],
    });
  }

  emailSent: boolean = false; // On initialise emailSent à false et on le met true dans la méthode onsubmit lors de l'envoie du Mail.


  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      this.emailSent = true;
      // window.alert('Votre message a bien été envoyé !');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, (error: Error) => {
      console.log('Une erreur est survenue...', error);
    });
  }
}
