import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createNewList(title: string){
    this.taskService.createlist(title).subscribe((response: any) => {
        console.log(response);

        //redirect to start
    });
  }

  onSubmit(f: any) {
    console.log(f.value);
    console.log(f.valid); 
    this.taskService.createlist(f.value).subscribe((response: any) => {
      console.log(response);

      //redirect to start
  });
  }
}
