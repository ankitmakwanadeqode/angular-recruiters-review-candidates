import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  resdatas: any;
  title = '';
  currentPage = 1;
  itemsPerPage = 10;
  defaultData = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll(this.currentPage)
      .subscribe(
        data => {
          this.resdatas = data.data.items;
          this.defaultData = false;
          console.log(this.resdatas);
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.userService.findByTitle(this.title, this.currentPage)
      .subscribe(
        data => {
          this.resdatas = data.data.items;
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
    this.title = '';
    this.resdatas = [];
    this.defaultData = false;
  }

}
