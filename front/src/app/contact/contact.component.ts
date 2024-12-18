import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [Validators.required, Validators.minLength(5)]),
  });

  onSubmit(){
    console.log("Formulario enviado: ", this.myForm.value);
  }





/*
  consulta = {
      name: "",
      email: "",
      message: ""
  };
  
  onSubmit(){
    console.log("formulario enviado: ", this.consulta);
  }
*/

}
