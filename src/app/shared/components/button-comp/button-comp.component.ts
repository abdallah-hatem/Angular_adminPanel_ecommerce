import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-comp.component.html',
  styleUrl: './button-comp.component.scss',
})
export class ButtonCompComponent {
  @Input() title = 'Title';
  @Input() disabled = false;
  @Input() style: { [klass: string]: any };

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
