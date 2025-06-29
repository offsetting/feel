import {Component, HostBinding, Input} from '@angular/core';


@Component({
    selector: 'feel-flex-grid',
    imports: [],
    templateUrl: './flex-grid.component.html',
    styleUrls: ['./flex-grid.component.scss']
})
export class FlexGridComponent {

  @Input()
  @HostBinding('style.--min-width')
  public minWidth: `${number}rem` = "10rem";
}
