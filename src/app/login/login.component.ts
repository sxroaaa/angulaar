import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  mostrarPassword: Boolean= true;
  passwordControl: FormControl=  new FormControl('', Validators.required);
  loginForm: FormGroup= new FormGroup({
    username: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', Validators.required)
  })

  constructor(){

  }

  
}
