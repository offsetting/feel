import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'feel-form-error',
    imports: [CommonModule],
    templateUrl: './form-error.component.html',
    styleUrls: ['./form-error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorComponent {

}
