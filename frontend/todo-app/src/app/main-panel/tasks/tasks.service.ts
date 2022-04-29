import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/category.model';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasklist: Task[] = [new Task(0, "Make shopping", new Category(0, "All"))];

  constructor() { }

  get tasks(): Task[] {
    return this.tasklist;
  }
}
