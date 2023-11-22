import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor} from "@angular/forms";
import {TextFieldModule} from "@angular/cdk/text-field";

@Component({
  selector: 'feel-form-dropdown',
  standalone: true,
  imports: [CommonModule, TextFieldModule],
  templateUrl: './form-dropdown.component.html',
  styleUrl: './form-dropdown.component.scss'
})
export class FormDropdownComponent implements ControlValueAccessor {

  @Input() public label: string | undefined;

  @ViewChild('input') private input: ElementRef<HTMLInputElement> | undefined;

  protected onChangeFn: ((checked: string | number | Date | null | undefined) => void) | undefined;
  protected onTouchedFn: (() => void) | undefined;

  constructor(
    private readonly renderer2: Renderer2,
  ) {
  }

  public registerOnChange(fn: (checked: string | number | Date | null | undefined) => void): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  public writeValue(value: string | number | Date | null | undefined): void {
    this.renderer2.setProperty(this.input, "disabled", false);
  }

  public setDisabledState(disabled: boolean) {
    this.renderer2.setProperty(this.input, "disabled", disabled);
  }
}
