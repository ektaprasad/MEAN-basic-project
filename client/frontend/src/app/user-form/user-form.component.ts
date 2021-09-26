import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  addUserForm: FormGroup;
  public res: any = [];
  private token: string;
  user = { userName: '', age: '', address: '' };
  constructor(
    private addUser: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      userName: new FormControl(this.user.userName, [
        Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')
      ]),
      age: new FormControl(this.user.age, [Validators.required,Validators.minLength(0),Validators.maxLength(3),Validators.pattern('[0-9]*')]),
      address: new FormControl(this.user.address, [Validators.required, Validators.maxLength(30)]),
    });
  }

  addNewUser() {
    this.addUser.performAddUser(this.addUserForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toastr.success('User Added Successfully');
          this.router.navigate(['user-list']);
        },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.message);
        }
      );
  }
  
}
