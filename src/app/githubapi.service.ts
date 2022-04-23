import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  user:User;
  repo:Repo;
  repoData = [];
  newUserData: any = [];
  showInput:any;
  showData:any
  
  constructor(private http: HttpClient) {
    this.user = new User("", "", new Date(), new Date(),"",0,"");
    this.repo = new Repo ("", "","","","",new Date(),new Date(),"")
   }

   getUserData(username:string) {
     this.repoData.length = 0;

     interface ApiResponse {
       bio:string,
       avatar_url:string,
       created_at:Date,
       updated_at:Date,
       login:string,
       public_repos:number;
       html_url:string,
       name:string,
     }

     let promise = new Promise<void>((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
         this.user.bio = response.bio;
         this.user.avatar_url = response.avatar_url;
         this.user.login = response.login;
         this.user.created_at = response.created_at;
         this.user.public_repos = response.public_repos;
         this.user.html_url = response.html_url;
         this.user.updated_at = response.updated_at;

         resolve()

     }),
       (error)=>{
        reject(error)
       }

      this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
        for (var i=0; i<response.length; i++){
          this.newUserData = new Repo(response[i].clone_url,response[i].name,response[i].full_name,response[i].html_url,response[i].language,response[i].created_at,response[i].updated_at,response[i].description);
          this.repoData.push(this.newUserData);
        }
        
        resolve()
      },
      error=>{
        reject(error)
          }
      )
    })
    return promise
  }
}

      

       }
     }


   }



}
