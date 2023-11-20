import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorDirective } from '../../directives/control-value-accessor.directive';

@Component({
  selector: 'app-input-comp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./input-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCompComponent),
      multi: true,
    },
  ],
  template: `
    <div class="input-item" [ngStyle]="style">
      <label for="{{ labelFor }}">{{ labelName }}</label>
      <input
        matInput
        type="{{ inputType }}"
        id="{{ inputId }}"
        [formControl]="$any(control)"
        title="{{ tooltipText }}"
      />
    </div>
  `,
})
export class InputCompComponent<T> extends ControlValueAccessorDirective<T> {
  @Input() labelName: string = 'Label';
  @Input() labelFor: string;
  @Input() inputType: string;
  @Input() inputId: string;
  @Input() tooltipText: string;
  @Input() style: { [klass: string]: any };
}
