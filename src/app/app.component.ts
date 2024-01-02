import { Component } from '@angular/core';
import { Course } from './module/Course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   courses : Course[] =[
    {
       title :'angular complete course',isActive:false
    },
    {
      title :'angular unit testing',isActive:false
   },
   {
    title :'angular Rxjs',isActive:false
 },
   ]
  title = 'animation';
}
