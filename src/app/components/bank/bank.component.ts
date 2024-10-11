import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreditCardComponent } from './credit-card/credit-card.component';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [FormsModule, CommonModule, CreditCardComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.scss',
})
export class BankComponent implements AfterViewInit {
  cardInfo: any = {
    placeHolder: '',
    code: 0,
    mm: 0,
    yy: 0,
    cvc: 0,
  };

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.cardInfo.placeHolder);
  }
  onConfirm(): void {
    console.log('Card Info:', this.cardInfo);
  }
}
