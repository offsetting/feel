import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from "../notification.service";
import {Notification} from "../notification.domain";
import {fadeAnimation} from '@feel/style';
import {NotificationComponent} from "../notification/notification.component";

@Component({
  selector: 'feel-notification-list',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  animations: [fadeAnimation]
})
export class NotificationListComponent {

  protected notifications = this.notificationService.getNotifications();

  constructor(
    private readonly notificationService: NotificationService,
  ) {
  }

  protected trackBy(_: number, notification: Notification): number {
    return notification.id;
  }
}
