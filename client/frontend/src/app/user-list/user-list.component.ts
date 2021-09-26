import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  array: any;
  p:any;
  data: {page:1};
  total: any;
  constructor(private userService: UserService) {
    // this.array = [1,2,3,4,5,6,7,8,9];
   }

  ngOnInit(): void {
    this.p = 1;
    this.data = {page: this.p};
    this.data['page'] = this.p;
    this.userService.getUserList(this.data).subscribe(res => {
      console.log(res);
      this.array = res['users'].data;
      this.total = res['users'].total;
    },
    (error) => {
      console.log(error);
    });

  }

  pageChanged(event) {
    this.p = event;
    console.log(event);
    this.data = {page: this.p};
    this.userService.getUserList(this.data).subscribe(res => {
      console.log(res);
      this.array = res['users'].data;
      this.total = res['users'].total;
    },
    (error) => {
      console.log(error);
    });
  }
 
}
