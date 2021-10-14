import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  getResultData: any;
  title: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  defaultData: boolean = false;
  loading: boolean = false;
  errorMsg: boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  searchTitle(): void {
    this.loading = true;
    if(this.title.length === 0)
    {
      this.errorMsg = true;
      this.loading = false;
      return;
    }
    this.commonService.findByTitle(this.title, this.currentPage)
      .subscribe(
        data => {
          this.getResultData = data.data.items;
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
    this.title = '';
    this.getResultData = [];
    this.defaultData = false;
    this.loading = false;
    this.errorMsg = false;
  }

}
