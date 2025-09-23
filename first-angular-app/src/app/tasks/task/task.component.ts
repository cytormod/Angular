import { Component, EventEmitter, Input, inject, Output } from '@angular/core';
import {type Taskk} from './task.model';
import { CardComponent } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

// interface Taskk{
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class Task {
  @Input({required: true}) task!: Taskk;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService)

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
