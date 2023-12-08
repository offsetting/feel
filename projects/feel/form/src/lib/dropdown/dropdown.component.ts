import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TextFieldModule} from "@angular/cdk/text-field";
import {OptionComponent} from "../option/option.component";

@Component({
  selector: 'feel-dropdown',
  standalone: true,
  imports: [CommonModule, TextFieldModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  // see https://github.com/angular/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts
  providers: [{provide: NG_VALUE_ACCESSOR, multi: true, useExisting: DropdownComponent}],
})
export class DropdownComponent implements ControlValueAccessor, AfterViewInit {

  @Input() public label: string | undefined;
  private value: string | undefined;

  protected onChangeFn: ((checked: string | undefined) => void) | undefined;
  protected onTouchedFn: (() => void) | undefined;
  private cachedValue: string | undefined;
  private cachedDisabledState: boolean | undefined;

  @ViewChild('input') private input: ElementRef<HTMLSelectElement> | undefined;
  @ContentChildren(OptionComponent) private options: QueryList<OptionComponent> | undefined;

  constructor(
    private readonly renderer2: Renderer2,
  ) {
  }

  public ngAfterViewInit(): void {
    if (this.input) {
      if (this.cachedValue !== undefined && this.cachedDisabledState !== null) this.setValue(this.cachedValue);
      if (this.cachedDisabledState) this.renderer2.setProperty(this.input.nativeElement, "disabled", this.cachedDisabledState);
    }
  }

  public registerOnChange(fn: (checked: string | undefined) => void): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  public writeValue(value: string | undefined): void {
    if (!this.input) this.cachedValue = value;
    else this.setValue(value);
  }

  public setDisabledState(disabled: boolean) {
    if (!this.input) this.cachedDisabledState = disabled;
    else this.renderer2.setProperty(this.input.nativeElement, "disabled", disabled);
  }

  protected onBlur(): void {
    this.onTouchedFn?.();
  }

  protected onInput(): void {
    this.value = this.getValueByLabel(this.label);
    this.onChangeFn?.(this.value);
    this.onTouchedFn?.();
  }

  private setValue(value: string | undefined): void {
    this.value = value;
    this.renderer2.setProperty(this.input?.nativeElement, "value", this.getLabel(value));
  }

  private getLabel(value: string | undefined): string | undefined {
    return this.options?.find(option => option.value === value)?.label;
  }

  private getValueByLabel(label: string | undefined): string | undefined {
    label = label?.toLowerCase();
    return this.options?.find(option => option.label?.toLowerCase() === label)?.value;
  }
}
