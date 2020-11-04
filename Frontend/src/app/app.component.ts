import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
title(title: any) {
  throw new Error("Method not implemented.");
}


constructor(public apiService: ApiService){
  
}
}
