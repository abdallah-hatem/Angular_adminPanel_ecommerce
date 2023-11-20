import { Directive, Injector, OnInit, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  Validators,
} from '@angular/forms';
import { Subject, distinctUntilChanged, startWith, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[appControlValueAccessor]',
  standalone: true,
})
export class ControlValueAccessorDirective<T>
  implements ControlValueAccessor, OnInit
{
  private injector = inject(Injector);

  control: FormControl | undefined;
  isRequired = false;

  private _onTouched!: () => T;
  private destroy = new Subject<void>();
  private _isDisabled: boolean = false;

  ngOnInit() {
    this.setFormControl();
    this.isRequired = this.control?.hasValidator(Validators.required) ?? false;
  }

  setFormControl() {
    try {
      const formControl = this.injector.get(NgControl);

      if (formControl.constructor) {
        if (formControl.constructor === FormControlName) {
          this.control = this.injector
            .get(FormGroupDirective)
            .getControl(formControl as FormControlName);
          return;
        }
        this.control = (formControl as FormControlDirective)
          .form as FormControl;
      }
    } catch (error) {
      this.control = new FormControl();
    }
  }

  writeValue(value: T): void {
    this.control
      ? this.control.setValue(value)
      : (this.control = new FormControl(value));
  }
  registerOnChange(fn: (val: T | null) => T): void {
    this.control?.valueChanges
      .pipe(
        takeUntil(this.destroy),
        startWith(this.control.value),
        distinctUntilChanged(),
        tap((val) => fn(val))
      )
      .subscribe(() => this.control?.markAsUntouched());
  }
  registerOnTouched(fn: () => T): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
