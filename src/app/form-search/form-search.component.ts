import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../githubapi.service';
import { User } from '../user';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  user:any;
  username:any;
  githubApiService:GithubapiService;
  public showInput = true;
  public showData = false;

  submit(){
    this.githubApiService.getUserData(this.username);
    this.showInput = true;
    this.showData = false;
  }

  myInput(hideInput:any){
    this.showInput = hideInput;
    this.showData = false;
  }

  constructor(githubApiService:GithubapiService) {
    this.githubApiService = githubApiService;
   }

  ngOnInit(): void {
  }

}
