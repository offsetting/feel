import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-icon-notification',
    imports: [CommonModule],
    templateUrl: './icon-notification.component.svg',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['../style.scss']
})
export class IconNotificationComponent {

}
