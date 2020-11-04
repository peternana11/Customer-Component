import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public apiService: ApiService, private router: Router,private route: ActivatedRoute) { }

  profile
  
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.apiService.getProfile(id).subscribe(data => this.profile = data) 
  }
  GotoUpdate(){
    let id = this.route.snapshot.params.id;
    this.router.navigateByUrl('update/'+ id)
  }
    Delete() {
        let id = this.route.snapshot.params.id;
        this.apiService.deleteUser(id);
    }

}
