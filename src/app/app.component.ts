import { Component,OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';

  quotes=[

    new Quote ("God is dead and we have killed him","We lost our way and killed everything good left on earth.",1)
  ]

  @Input() quote:Quote;
  @Output() isComplete = new  EventEmitter<boolean>();

  toogleDetails(index){
    this.quotes[index].showBody = ! this.quotes[index].showBody;
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }

  completeQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index, 1);
    }
  }

addNewquote(Quote){
  let QuoteLength = this.quotes.length;
Quote.id= QuoteLength+1
  this.quotes.push(Quote)
}


}
