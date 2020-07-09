import { Injectable } from '@angular/core';
import {TodoElement} from '../Interfaces/todo-element';
import {min} from 'rxjs/operators';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TodoWarehouseService {
  todoArr: TodoElement[];
  constructor() {
    this.todoArr = [
      {id: 0, description: 'Kivinni a szemetet!', priority: 8, done: false },
      {id: 1, description: 'Sétáltatni a kutyát!', priority: 2, done: false},
      {id: 2, description: 'Sétáltani a nagymamát!', priority: 9, done: false},
      {id: 3, description: 'Sétáltatni a macska!', priority: 10, done: false},
      {id: 4, description: 'Sétáltatni a öcsit!', priority: 1, done: false}];
  }
  saveTodo(element: TodoElement): TodoElement[] {
    element.id = this.todoArr.length;
    this.todoArr.push(element);
    return this.todoArr;
  }
  getSortedTodoElements(): TodoElement[]{
    return  this.todoArr.filter(e => !e.done).sort((a, b) => (a.priority > b.priority) ? 1 : -1);
  }
  markAsDone(elementId: number): void{
    for (const t of this.todoArr){
      if (t.id === elementId){
        t.done = true;
      }
    }
  }
}
