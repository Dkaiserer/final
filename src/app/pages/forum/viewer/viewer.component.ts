import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  commentObject: any = {};
  comments: Array<Comment> = [];

  commentsForm = this.createForm({
    username: '',
    comment: '',
    date: new Date()
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date());

       


        // Object
        this.comments.push(Object.assign({}, this.commentObject));

        this.router.navigateByUrl('/forum/successful/' + this.commentsForm.get('username')?.value);
      }
    }
  }

}
