import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() newWordEvent = new EventEmitter<string>(); //new EventEmitter<string>() tells Angular to create a new event emitter and that the data it emits is of type string.
  @Input() mot = '';
  
  save(){
    console.log('mot enregistré')
  }

  addNewWord(value : string){
    this.newWordEvent.emit(value);
  }

  
}
