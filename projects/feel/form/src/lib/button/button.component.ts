import {Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

export type ButtonFlavor = "good" | "danger";

@Component({
  selector: 'feel-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public label?: string;
  @Input() public link?: string;
  @Input() public query?: Record<string, string | undefined>;
  @Input() public flavor?: ButtonFlavor;
  @Input() @HostBinding("class.disabled") public disabled?: boolean | null;

  @HostBinding("class.good")
  private get good(): boolean {
    return this.flavor === "good";
  }

  @HostBinding("class.danger")
  private get danger(): boolean {
    return this.flavor === "danger";
  }
}
