import { Component, OnInit } from '@angular/core';
import { BasictodoService } from '../Service/basictodo.service';
import { FirebaseService } from '../Service/firebase.service';

import { BasicToDo } from '../basic-to-do'

@Component({
  selector: 'app-basic-tod',
  templateUrl: './basic-tod.component.html',
  styleUrls: ['./basic-tod.component.css']
})
export class BasicTodComponent implements OnInit {

  constructor(private BasicTodoService:BasictodoService, private firebaseService: FirebaseService) { }

  ToDo:BasicToDo = new BasicToDo();
  requestId:string = "";
  todoList:BasicToDo[] = [];
  todoObject:BasicToDo;
  toDoComplete:boolean = false;
  completedTask: number = 0;

  ngOnInit() {
    this.getAllToDO();
  }

  getAllToDO(){
    this.requestId = "basictodO";
    this.completedTask = 0;
    this.BasicTodoService.getData(this.requestId)
      .subscribe((data) => {
        this.todoList = data;

        this.todoList.forEach( item => {
          if (item.complete) {
            this.completedTask++;
          }
        });
      });
      /*this.firebaseService.getAllTodo().subscribe((res) => {
        console.log(res);
        
      });*/
  }

  AddToDo(){
    this.ToDo.id = this.todoList.length === 0 ? 1 : this.todoList[this.todoList.length - 1].id + 1;
    this.BasicTodoService.postData(this.ToDo).subscribe(() => {this.getAllToDO();});
    this.ToDo = new BasicToDo();
  }

  toggleToDOComplete(todo:BasicToDo) {
    todo.complete = !todo.complete;
    todo.complete ? this.completedTask++ : this.completedTask--;
    this.BasicTodoService.patchData(todo).subscribe(() => {
      
    //  this.getAllToDO();
    });
  }

  removeTodo(todo){
    this.BasicTodoService.deleteData(todo.id).subscribe(() => {this.getAllToDO();});
  }

}
