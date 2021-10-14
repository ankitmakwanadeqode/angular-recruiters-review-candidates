import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  getResultData: any;
  userName: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  defaultData: boolean = false;
  loading: boolean = false;
  errorMsg: boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  searchUserName(): void {
    this.loading = true;
    if(this.userName.length === 0)
    {
      this.errorMsg = true;
      this.loading = false;
      return;
    }
    this.commonService.findByUserName(this.userName, this.currentPage)
      .subscribe(
        data => {
          this.getResultData = data.data;
          this.defaultData = true;
          this.loading = false;
          this.errorMsg = false;
          console.log(data);
        },
        error => {
          this.loading = false;
          this.errorMsg = false;
          console.log(error);
        });
  }

  pageChanged(event:any){
    this.currentPage = event;
  }

  clearData(){
    this.userName = '';
    this.getResultData = [];
    this.defaultData = false;
    this.loading = false;
    this.errorMsg = false;
  }

}
