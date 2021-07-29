import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebrequestService) { }

  createlist(title: string) {
     return this.webReqService.post('tasks', {title});
  }

  getLists() {
    return this.webReqService.get('tasks');
  }

  getTasks(task_id: String){
    return this.webReqService.get(`tasks/${task_id}`)
  }

  deleteTask(task_id: String) {
    return this.webReqService.delete(`tasks/${task_id}`);
  } 
}
