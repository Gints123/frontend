import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(routeParams.get('id'));

  }

  onUpdate(u: any) 
  {
    console.log(u.value);
    this.route.params.subscribe((params: Params) => {
       this.taskService.updateTask(params.id, u.value).subscribe((response: any) => {
      console.log(response);
        })
      }
    )
    
  }
}
