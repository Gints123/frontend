import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { UpdateListComponent } from './pages/update-list/update-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'new-task', component: NewListComponent},
  {path: 'tasks', component: TaskviewComponent},
  {path: 'tasks/:id', component: TaskviewComponent},
  {path: 'update-task', component: UpdateListComponent},
  {path: 'update-task/:id', component: UpdateListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
