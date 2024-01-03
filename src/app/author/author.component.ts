import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  // isActive : string  = "is_active"
  isActive: boolean = false;

  getActiveClass() {
    return ['isActive'];
  }
  getColor(){
    return this.isActive?'pink':'green';
  }
}
