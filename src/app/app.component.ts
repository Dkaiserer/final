import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CinemaTicket';
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService){}
  NgOnIt(){
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user=>{
      this.loggedInUser = user;
    }, error =>{
      console.error(error);
    });
  }

  logout(){
    this.authService.logout().then(()=>{
      console.log('Sikeresen kijelentkezett');
    }).catch (error =>{
      console.error(error);
  });
    
  }
}
