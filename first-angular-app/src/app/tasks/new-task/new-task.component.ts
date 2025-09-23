import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; // it is a collection of directives and Features, that help us with dealing  with forms and with user input.
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  
  // After importing TasksService, you don't instantiate it here but instead you just the task service class name as a so-called injection token that's passed to inject. And again angular will then do the heavy liftingunder the hood.
  private tasksService = inject(TasksService);


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate,
    // })
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
        this.close.emit();
  }
}
