
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiemailService } from '../serviemail.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  data = {
    to: "",
    subject: "",
    message: "",
    Password: ""
  }


  flag = false;
  buttDisabled = true;
  constructor(private email: ServiemailService, private snak: MatSnackBar) {
  }
  ngOnInit(): void {
  }
  checkVal(val: any) {
    if (this.data.to && this.data.subject && this.data.message && this.data.Password) {
      this.buttDisabled = false;

    }
    else {
      this.buttDisabled = true;
    }
  }
  // onReset() {
  //   if (this.data.to && this.data.subject && this.data.message && this.data.Password) {
  //     this.buttDisabled = false;
  //   }
  //   else {
  //     this.buttDisabled = true;
  //   }

  // }
  dosumit() {
    if (this.data.to == null && this.data.subject == "" || this.data.message == "" || this.data.Password == "") {
      this.flag = true;
      this.snak.open("send success", "ok");
      return;
    }
    this.email.sendEail(this.data).subscribe(
      Response => {
        console.log(Response);
        this.flag = false;
        this.snak.open("send success", "ok");
        // window.location.href = "/send_email"
      },
      error => {
        console.log(error);
        this.flag = false;
        this.snak.open("Error !!", "ok");
      }
    )
  }
}

