import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebrequestService, private http: HttpClient) { }

  createlist(body: any) {
     return this.webReqService.post('tasks', body);
  }

  getLists() {
    return this.webReqService.get('tasks');
  }

  getTask(id: String) {
    return this.webReqService.get(`tasks/${id}`);
  }

  deleteTask(id: String) {
    return this.webReqService.delete(`tasks/${id}`);
  } 

  updateTask(id: string, body: any)
  {
    return this.webReqService.put(`tasks/${id}`, body);
  }
}
