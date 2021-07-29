import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {


  lists: any;
  tasks: any;


  constructor(private taskSerivce: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          console.log(params);
          this.taskSerivce.getTasks(params.id).subscribe((tasks: any) => {
            console.log(tasks);
            this.tasks = tasks;
          })
      }

    )

    this.taskSerivce.getLists().subscribe((lists: any) => {
      this.lists = lists;
    })


  }

  onDeleteTask(task_id: string) {
    this.taskSerivce.deleteTask(task_id);
  }
}
