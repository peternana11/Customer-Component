
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

      // GotoUpdate(){
      //   let id = this.route.snapshot.params.id;
      //   this.router.navigateByUrl('update/'+ id)
      // }
  // id(userData: { firstname: string; lastname: string; email: string; telephone: string; }, id) {
  //   throw new Error("Method not implemented.");
  // }
}