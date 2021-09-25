import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service/user.service';
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
    private addUser: UserService
  ) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      userName: new FormControl(this.user.userName, [
        Validators.required,
      ]),
      age: new FormControl(this.user.age, [Validators.required,Validators.minLength(0),Validators.maxLength(3)]),
      address: new FormControl(this.user.address, [Validators.required, Validators.maxLength(30)]),
    });
  }

  addNewUser() {
    this.addUser.performAddUser(this.addUserForm.value)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  
}
