import { Component } from '@angular/core';
import { TodoService } from './todostore.service';

@Component({
  selector: 'todo',
  templateUrl: 'app/todo.html',
  providers: [TodoService]
})


export class AppComponent {
  newtodo: any;
  todolists;

  // constructor(){
  //   this.newtodo = '';
  //   this.todolists = [];
  // }
  constructor(todoService: TodoService){
    this.todolists = todoService;
  }
  
  // addTodo() {
  //   this.todolists.push(this.newtodo);
  //   this.newtodo = '';
  //   console.log(this.todolists);
  // }
  addTodo(){
		if (this.newtodo.trim().length) {
			this.todolists.add(this.newtodo);
			this.newtodo = '';
		}
    console.log(this.todolists);
  }
 }
