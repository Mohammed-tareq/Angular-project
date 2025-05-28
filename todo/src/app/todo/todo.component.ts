import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks:string[]=[];
  newTask:string='';

  addTask(){

    if( !this.newTask ||!this.newTask.trim()){
      this.newTask='';
      return;
    }

    this.tasks.push(this.newTask);
    this.newTask='';
  }

  removeTask(index:number){
    this.tasks.splice(index,1)
  }

}
