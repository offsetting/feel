import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-icon-keyboard',
    imports: [CommonModule],
    templateUrl: './icon-keyboard.component.svg',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['../style.scss']
})
export class IconKeyboardComponent {

}
