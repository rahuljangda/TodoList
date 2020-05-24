import { Component, OnInit, ViewChild } from '@angular/core';
import { BasictodoService } from '../Service/basictodo.service';
import { FirebaseService } from '../Service/firebase.service';

import { BasicToDo } from '../basic-to-do'
import { AlertComponent } from '../alert/alert.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-basic-tod',
  templateUrl: './basic-tod.component.html',
  styleUrls: ['./basic-tod.component.css']
})
export class BasicTodComponent implements OnInit {

  @ViewChild(AlertComponent, {static:true}) private alertComponent: AlertComponent;
  // @ViewChild(HomeComponent,{static:true}) private homeComponent: HomeComponent;

  constructor(private BasicTodoService:BasictodoService, private firebaseService: FirebaseService) { }

  ToDo:BasicToDo = new BasicToDo();
  requestId:string = "";
  todoList:BasicToDo[] = [];
  todoObject:BasicToDo;
  toDoComplete:boolean = false;
  completedTask: number = 0;
  enableMessage: boolean = false;
  type:number = 0;

  ngOnInit() {
    this.getAllToDO();
  }

  getAllToDO(){
    this.requestId = "basictodO";
    this.completedTask = 0;
    if(this.type === 3) {
      var result = this.BasicTodoService.getJsonList();
      this.todoList = JSON.parse(JSON.stringify(result["BasicToDO"]));
      this.todoList.forEach( item => {
        if (item.complete) {
          this.completedTask++;
        }
      });
    } else if(this.type === 2) {  
    this.BasicTodoService.getData(this.requestId)
      .subscribe(
        (data) => {
          this.enableMessage = false;
        this.todoList = data;

        this.todoList.forEach( item => {
          if (item.complete) {
            this.completedTask++;
          }
        });
      },
      (error) => {
        this.alertComponent.displayError(error);
        this.enableMessage = true;
      });
    }
      /*this.firebaseService.getAllTodo().subscribe((res) => {
        console.log(res);
        
      });*/
  }

  selectedType(e) {
    this.type = e;
    console.log(this.type);
    this.ngOnInit();
  }

  AddToDo(){
    this.ToDo.id = this.todoList.length === 0 ? 1 : this.todoList[this.todoList.length - 1].id + 1;
    if (this.type === 3) {
      this.todoList.push(this.ToDo);
      this.ToDo = new BasicToDo();
    } else if(this.type === 2) {
    this.BasicTodoService.postData(this.ToDo).subscribe(() => {this.getAllToDO();});
    this.ToDo = new BasicToDo();
    }
  }

  toggleToDOComplete(todo:BasicToDo) {
    todo.complete = !todo.complete;
    todo.complete ? this.completedTask++ : this.completedTask--;
    if(this.type === 2) {
    this.BasicTodoService.patchData(todo).subscribe(() => {
    //  this.getAllToDO();
    });
  }
  }

  removeTodo(todo,index){
    if(this.type === 3){
      console.log(index);
      this.completedTask = todo.complete ? this.completedTask - 1 : this.completedTask;
      this.todoList.splice(index,1);
    }else if(this.type === 2) {
        this.BasicTodoService.deleteData(todo.id).subscribe(() => {this.getAllToDO();});
    }
  }

}
