import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // @Input({required: true}) name!: string;
  // We are giving as a option because, there might be chance, that one might be able to find the existed userId.
  @Input({required: true}) userId!:string;
  @Input({required: true}) name?: string;
  isAddingTask: boolean = false; // Since We are assigning the initial value, TS is able to infer the type of value, we plan on storing on this property in general. It infers it is boolean
  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary: 'Learn all the basic and advance Features of Angular & how to apply them',
  //     dueDate: '2025-12-31'
  //   },
  //   {
  //   id: 't2',
  //   userId: 'u3',
  //   title: 'Build first prototype',
  //   summary: 'Build a first prototype of the online shop website',
  //   dueDate: '2024-05-31',
  // },
  // {
  //   id: 't3',
  //   userId: 'u3',
  //   title: 'Prepare issue template',
  //   summary:
  //     'Prepare and describe an issue template which will help with project management',
  //   dueDate: '2024-06-15',
  // },
  // ];

  // private tasksService = new TasksService();

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return
    // return this.tasksService.getUserTasks(this.userId)
    // return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string){
    // ! .filter() keeps elements where the condition is true. and that's why we are giving not equal sign here.
    // this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // this.tasks.unshift({
    //   id: new Date().getTime().toString(),
    //   userId: this.userId,
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date,
    // })
    this.isAddingTask = false;
  }
}
