
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  userData = {
    'firstname':'',
    'lastname':'',
    'email': '',
    'telephone':'',
  }


    constructor(private apiService: ApiService ,private router: Router, private route: ActivatedRoute){}

      Post(){
        let id = this.route.snapshot.params.id;
        this.apiService.updateUser(this.userData, id)
      }

   
}