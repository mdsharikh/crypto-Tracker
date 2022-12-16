import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService implements OnInit {
   
  private selectedCurrency : BehaviorSubject<string> = new BehaviorSubject<string>("INR");


  constructor() { }

  ngOnInit(): void {
    
  }
  getCurrency() {
    return this.selectedCurrency.asObservable();
  }

  setCurrency(currency:string) {
    this.selectedCurrency.next(currency);
  }
}
