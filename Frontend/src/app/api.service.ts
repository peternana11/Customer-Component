import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable()
export class ApiService{
    
    
    constructor(private http: HttpClient, private route: Router) {}

  
    users = []
    TOKEN_KEY = 'token'
    path = environment.path;
    authPath = '/api/users';
    
   

    get token(){
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout(){
        localStorage.removeItem(this.TOKEN_KEY);
        this.route.navigateByUrl("/login");
    }
    getProfile(id) {
        return this.http.get(this.authPath +'/' + id)
    }
    sendUserRegistration(regData) {
        this.http.post<any>(this.authPath + '/register', regData).subscribe(res => { 
            console.log(res) 
            localStorage.setItem(this.TOKEN_KEY, res.token)  
            if(this.isAuthenticated){
                this.route.navigateByUrl("/login")
            }else{
                console.log("Registration Failed")
            }     
        }) 
    
    };
    loginUser(loginData) {
        this.http.post<any>(this.authPath + '/login', loginData).subscribe(res =>{
            console.log(res);
            localStorage.setItem(this.TOKEN_KEY, res.token)
            if(this.isAuthenticated){
                this.route.navigateByUrl("profile/"+res.user._id)
            }else{
                console.log("Registration Failed")
            }   
        })
    };
    deleteUser(id) {
        this.http.delete<any>(this.authPath + '/' + id).subscribe(res => {
            localStorage.removeItem(this.TOKEN_KEY);
            this.route.navigateByUrl("/login")
        })
    }
    updateUser(userData, id) {
        console.log(id)
        console.log(userData)
        this.http.patch<any>(this.authPath + '/' + id, userData).subscribe(res => {
            console.log('Your update was successful')
            this.route.navigateByUrl('profile/'+ id)
        })
    }
}   