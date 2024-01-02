import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Course } from '../module/Course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
  //  encapsulation: ViewEncapsulation.Emulate,
  //if the no decorative there in the  component the encapsulation it by default taking as the emulated
  // that's why Shadow dom will be used  to decorative porous
})
export class CourseComponent {
  @Input() course!: Course;
}

// no emulates  shadow dom and net to  shadow dom
// the emulated shadow dom which is used to the give the shadow properties
