import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-icon-style',
    imports: [CommonModule],
    templateUrl: './icon-style.component.svg',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['../style.scss']
})
export class IconStyleComponent {

}
