import {Component} from '@angular/core';
import {NotificationService} from "@feel/notification";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  protected form = new FormGroup({
    drop: new FormControl
  })
  constructor(
    private readonly notificationService: NotificationService
  ) {
  }

  protected notificationExample() {
    this.notificationService.info("This is an example notification.");
  }
}
