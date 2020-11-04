import { Component } from '@angular/core';
import { ApiService } from './api.service';



@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    'firstname':'',
    'lastname':'',
    'email': '',
    'password': '' ,
    'telephone':'',
  
  }

    constructor(private apiService: ApiService){}

      Post(){
        this.apiService.sendUserRegistration(this.registerData);
      }

  

}
