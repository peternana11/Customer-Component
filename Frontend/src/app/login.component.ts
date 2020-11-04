import { Component } from '@angular/core';
import { ApiService } from './api.service';



@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginData = {
  'email': '',
  'password': '' 
}

constructor (private apiService: ApiService){ }

Post(){
  this.apiService.loginUser(this.loginData);
}

}
