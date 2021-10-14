import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersdatas : any;
  username = '';
  currentPage = 1;
  defaultData = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  searchUserName(): void {
    this.userService.findByUserName(this.username, this.currentPage)
      .subscribe(
        data => {
          this.usersdatas = data;
          this.defaultData = true;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  pageChanged(event:any){
    this.currentPage = event;
  }

  clearData(){
    this.username = '';
    this.usersdatas = [];
    this.defaultData = false;
  }

}
