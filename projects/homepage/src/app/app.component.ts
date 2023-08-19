import {Component} from '@angular/core';
import {NotificationService} from "@feel/notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly notificationService: NotificationService
  ) {
  }

  protected notificationExample() {
    this.notificationService.info("This is an example notification.");
  }
}
