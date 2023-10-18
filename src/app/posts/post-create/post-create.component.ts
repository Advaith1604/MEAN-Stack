import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }
  newPost = '123'
  enteredVal = ''
  ngOnInit() {
  }
savePost(){
  this.newPost = this.enteredVal

}
}
