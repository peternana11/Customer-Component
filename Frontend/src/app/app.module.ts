import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from "./api.service"
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './authInterceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component'

const routes = [
  
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"update/:id", component:UpdateComponent},
  {path:"profile/:id", component:ProfileComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService,
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
