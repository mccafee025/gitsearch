import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubapiService } from '../githubapi.service';
import { User } from '../user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  user:any = User;
  repoDetails = [];
  githubapiService: GithubapiService;
  hideInput:any;

  constructor(gitapiService:GithubapiService) {
    this.githubapiService = gitapiService;
   }

   @Output () toggleBack = new EventEmitter();

   Back(){
     this.hideInput = true
     this.toggleBack.emit(this.hideInput);
   }



  ngOnInit(): void {
    this.user = this.githubapiService.user;
    this.repoDetaisl = this.githubapiService.repoData;
        
  }

}
