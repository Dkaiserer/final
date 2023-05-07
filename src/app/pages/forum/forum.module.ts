import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumComponent} from './forum.component'
import { ViewerComponent } from './viewer/viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';


@NgModule({
  declarations: [
    ForumComponent,
    ViewerComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ForumModule { }
