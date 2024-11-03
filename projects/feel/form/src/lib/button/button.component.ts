import {Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

export type ButtonFlavor = "good" | "danger" | "accent";

@Component({
  selector: 'feel-button',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public label?: string;
  @Input() public link?: string;
  @Input() public highlightActiveLink?: boolean;
  @Input() public center?: boolean;
  @Input() public query?: Record<string, string | undefined>;
  @Input() public flavor?: ButtonFlavor;
  @Input() @HostBinding("class.disabled") public disabled?: boolean | null;

  protected isHref(link: string | undefined): boolean {
    return (!!link && (link.startsWith('https:') || link.startsWith('mailto:') || link.startsWith('#')));
  }

  @HostBinding("class.good")
  private get good(): boolean {
    return this.flavor === "good";
  }

  @HostBinding("class.danger")
  private get danger(): boolean {
    return this.flavor === "danger";
  }

  @HostBinding("class.accent")
  private get accent(): boolean {
    return this.flavor === "accent";
  }
}
