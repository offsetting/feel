import {Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'feel-flex-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.scss']
})
export class FlexGridComponent {

  @Input()
  @HostBinding('style.--min-width')
  public minWidth: `${number}rem` = "10rem";
}
