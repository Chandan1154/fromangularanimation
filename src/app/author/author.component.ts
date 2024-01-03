import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  // isActive : string  = "is_active"
  isActive: boolean = true;
  // @ViewChild('authorRef')
  // authorElement!: ElementRef<HTMLDivElement>;

  @ViewChild('authorRef', { static: true })
  authorElement!: ElementRef<HTMLDivElement>;

  // correct way to change the dom element
  constructor(private render: Renderer2) {}

  changeColor() {
    return this.render.setStyle(this.authorElement.nativeElement,'color','green')
  }

  ngAfterViewInit() {
    console.log(this.authorElement);
  }

  getActiveClass() {
    return ['isActive'];
  }
  // getColor(){
  //   return this.isActive?'pink':'green';
  // }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.authorElement);
  }
  getColor(element: HTMLDivElement) {
    // console.log(element);
    element.style.color = 'pink';
    element.style.fontSize = '40px';
  }
}
