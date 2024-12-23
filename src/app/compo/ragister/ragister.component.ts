import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ragister',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './ragister.component.html',
  styleUrl: './ragister.component.css'
})
export class RagisterComponent {

userr:FormGroup = new FormGroup({
      username: new FormControl("",[Validators.required ]),
      emailid: new FormControl("",[Validators.email]),
      password: new FormControl("",[Validators.required]),

      });

  userObj:any = {
  
      "id":0,
      "username":"",
      "emailid":"",
      "password":'',
  
  };

http = inject (HttpClient);
 router=inject(Router);

  onsave(){
    this.userObj = this.userr.value;
    debugger;
   this.http.post("http://localhost:3000/register",this.userObj).subscribe((res:any)=>{  
    console.log(res);
      debugger;
      if(res=true){
        alert('User creat sucsessfully')
        this.router.navigate(['login'])
      }else{
        
      }
   })
   }
}
