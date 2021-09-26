import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  array: any;

  constructor(private userService: UserService) {
    // this.array = [1,2,3,4,5,6,7,8,9];
   }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(res => {
      console.log(res);
      this.array = res['users'];
    },
    (error) => {
      console.log(error);
    });

  }

 
}
