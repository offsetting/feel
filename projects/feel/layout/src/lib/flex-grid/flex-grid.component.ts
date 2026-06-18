import {Component, HostBinding, Input, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'feel-flex-grid',
    imports: [],
    templateUrl: './flex-grid.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./flex-grid.component.scss']
})
export class FlexGridComponent {

  @Input()
  @HostBinding('style.--min-width')
  public minWidth: `${number}rem` = "10rem";
}
