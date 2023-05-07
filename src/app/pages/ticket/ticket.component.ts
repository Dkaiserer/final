import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  contactForm!: FormGroup;
 
  movies = [
    { id: 1, name: "Party Rock" },
    { id: 2, name: "SameButDifferent" },
    { id: 3, name: "OneOfThehighest" },
    { id: 4, name: "Oldmemory" },
    { id: 5, name: "StandingAlone" }
  ];

  times = [
    { id: 1, name: "12:00" },
    { id: 2, name: "14:00" },
    { id: 3, name: "16:00" },
    { id: 4, name: "18:00" },
    { id: 5, name: "20:00" }
  ];
 
  constructor(private fb:FormBuilder) {
  }
 
  ngOnInit() {
 
    this.contactForm = this.fb.group({
      movie: [null],
      time: [null]
    });
  }
 
  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
  }
 

}
