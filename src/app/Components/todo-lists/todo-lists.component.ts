import {Component, Input, OnInit} from '@angular/core';
import {TodoElement} from '../../Interfaces/todo-element';
import {TodoWarehouseService} from '../../Services/todo-warehouse.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {
  form: FormGroup;
  @Input()
  inputUser: TodoElement;
  todoArr: TodoElement[];
  constructor(private warehouseService: TodoWarehouseService) {
    this.todoArr = [];
    this.form = new FormGroup({
      description: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      priority: new FormControl(null, [Validators.required, Validators.max(100)]),
      id: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
      done: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.todoArr = this.warehouseService.getSortedTodoElements();
    if (this.inputUser) {
      this.form.get('leírás').setValue(this.inputUser.description);
      this.form.get('prioritás').setValue(this.inputUser.priority);
      this.form.get('id').setValue(this.inputUser.id);
      this.form.get('done').setValue(this.inputUser.done);
    }
  }
  markAsDone(element: TodoElement): void{
    this.warehouseService.markAsDone(element.id);
    this.todoArr = this.warehouseService.getSortedTodoElements();
  }
  submitf() {
    const t: TodoElement = {
      description: this.form.get('leírás').value,
      priority: this.form.get('prioritás').value,
      id: this.form.get('id').value,
      done: this.form.get('kész').value,
    };
  }
}
