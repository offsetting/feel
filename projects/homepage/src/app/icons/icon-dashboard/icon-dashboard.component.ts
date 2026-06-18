import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-icon-dashboard',
    imports: [CommonModule],
    templateUrl: './icon-dashboard.component.svg',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['../style.scss']
})
export class IconDashboardComponent {

}
