import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './appLogin.component.html',
  styleUrls: ['./app.component.scss']
})
export class LoginComponent {
  register = {
    name: '',
    email: '',
    password: ''
  }
  onLogin(){
    console.log(this.register)
  }
}
