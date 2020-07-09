import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoListsComponent} from './Components/todo-lists/todo-lists.component';


const routes: Routes = [
  { path: 'todoList', component: TodoListsComponent },
 // { path: 'add-user', component: AddUserComponent },
  { path: '', pathMatch: 'full', redirectTo: 'todoList' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
