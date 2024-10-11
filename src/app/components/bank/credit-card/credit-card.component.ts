import { Component, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss',
})
export class CreditCardComponent {
  @Input('test') cardInfo!: any;

  constructor() {
    console.log(this.cardInfo, 'logged');
  }
}
