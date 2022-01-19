import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { resolve } from 'url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  words = ['hi', 'hello', 'salut'];
  bonjour : 'hello';
  addWord(newWord: string){
    this.words.push(newWord);
    console.log('word added')
  }


  }