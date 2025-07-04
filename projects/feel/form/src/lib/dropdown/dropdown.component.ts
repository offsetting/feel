import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'feel-dropdown',
    imports: [],
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    // see https://github.com/angular/angular/blob/master/packages/forms/src/directives/default_value_accessor.ts
    providers: [{ provide: NG_VALUE_ACCESSOR, multi: true, useExisting: DropdownComponent }]
})
export class DropdownComponent implements ControlValueAccessor, AfterViewInit {

  @Input() public label: string | undefined;

  protected onChangeFn: ((checked: string | number | Date | null | undefined) => void) | undefined;
  protected onTouchedFn: (() => void) | undefined;
  private cachedValue: string | null | undefined;
  private cachedDisabledState: boolean | undefined;

  @ViewChild('select') private select: ElementRef<HTMLSelectElement> | undefined;

  constructor(
    private readonly renderer2: Renderer2,
  ) {
  }

  public ngAfterViewInit(): void {
    if (this.select) {
      if (this.cachedValue !== undefined && this.cachedDisabledState !== null) this.setValue(this.cachedValue);
      if (this.cachedDisabledState) this.renderer2.setProperty(this.select.nativeElement, "disabled", this.cachedDisabledState);
    }
  }

  public registerOnChange(fn: (checked: string | number | Date | null | undefined) => void): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  public writeValue(value: string | null | undefined): void {
    if (!this.select) this.cachedValue = value;
    else this.setValue(value);
  }

  public setDisabledState(disabled: boolean) {
    if (!this.select) this.cachedDisabledState = disabled;
    else this.renderer2.setProperty(this.select.nativeElement, "disabled", disabled);
  }

  protected onBlur(): void {
    this.onTouchedFn?.();
  }

  protected onInput(): void {
    this.onChangeFn?.(this.getValue());
    this.onTouchedFn?.();
  }

  private getValue(): string | null | undefined {
    return this.select?.nativeElement?.value;
  }

  private setValue(value: string | null | undefined) {
    this.renderer2.setProperty(this.select?.nativeElement, "value", value);
  }
}
