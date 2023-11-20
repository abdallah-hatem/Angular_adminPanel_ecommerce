import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { IsMobileService } from '../../services/is-mobile.service';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card style="background-color: white;" [ngStyle]="defStyle(style)">
      <mat-card-header style="margin-bottom: 30px;">
        <mat-card-title>{{ title }}</mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
    </mat-card>
  `,
})
export class CardComponent implements OnInit {
  isMobileService = inject(IsMobileService);

  @Input() title: string = 'Title';
  @Input() children: HTMLElement;
  @Input() style: { [klass: string]: any };

  isMobile: boolean = false;

  ngOnInit() {
    this.isMobile = this.isMobileService.isMobile();
  }

  defStyle(style: { [klass: string]: any }) {
    const defaultStyle = {
      width: !this.isMobile ? '70%' : '100%',
      margin: 'auto',
    };

    if (!style) return defaultStyle;

    return { ...defaultStyle, ...style };
  }
}
