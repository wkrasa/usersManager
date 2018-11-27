import { Component, Inject } from '@angular/core';
import { User, WEB_CONFIG, IWebConfig, SHARED_DATA, SharedData } from '../../core.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UsersManager';
  messageForTest = 'test';

  constructor(@Inject(SHARED_DATA) private sharedData: any) {

  }
}
