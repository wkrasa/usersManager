import { Component, Inject } from '@angular/core';
import { User, WEB_CONFIG, IWebConfig, SHARED_DATA, SharedData, AuthorizationService } from '../../core.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = {};

  constructor(private authorizationService: AuthorizationService) {    
  }

  onLogin() {
    this.authorizationService.login(this.data.login, this.data.password);
  }
}
