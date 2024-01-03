import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'author',component:UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
