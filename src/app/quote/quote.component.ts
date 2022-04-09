import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'elijah','first quote ', 0, 0, 'description one'),
    new Quote(2,'elijah','second quote', 0, 0, 'description one'),
    new Quote(3,'elijah','third quote', 0, 0, 'description one'),
  ];
  constructor() {}
  completequote(ifSure: any, index: number) {
    if (ifSure) {
      this.quotes.splice(index, 1);
    }
  }

  ngOnInit(): void {}
  toggleDetails(index: any) {
    this.quotes[index].showdetails = !this.quotes[index].showdetails;
  }
  deleteTheQuote(ifSure: any, index: number) {
    if (ifSure) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].description}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  
}

 
  


