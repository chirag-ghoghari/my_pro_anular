import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

//     userform:FormGroup = new FormGroup({
//       name: new FormControl(""),
//       username: new FormControl(""),
//       email: new FormControl(""),
//       password: new FormControl(""),
//       confirm_password: new FormControl(""),
//       });

// formvlaue:any;

  http=inject(HttpClient);
  
  userinf:any = {
        "id": 0,
        "name": "",
        "username": "",
        "email": "",
        "password": "",
        "confimpassword": ""
  }
  
  onsave() {
    // this.a = this.userinf
    debugger;
    this.http.post("http://localhost:3000/userinfo",this.userinf).subscribe((res:any)=>{  
      debugger;
      if(res=true){
        alert('User Creat sucsessfully')
        this.getalluser();   // page load pe jo data cahiya o function ko aha per bhi call kar do use apko refresh kar ne ke bad data milta tha o abhi record submit hone pe mil jaye ga 
      }else{
        alert('not')
      }
    })
   }


   ngOnInit(): void {       //page load to call any function in including to oninit life cycle  event
     this.getalluser();    //call function 
   }
   a:any;
  getalluser(){
    this.http.get("http://localhost:3000/userinfo",this.userinf).subscribe((res:any)=>{  
      this.a=res;
    })
  }
  onEdit(m:any){
    this.userinf= m;
  }

  onupdate(){
    this.http.post("http://localhost:3000/userinfo",this.userinf).subscribe((res:any)=>{  
      debugger;
      if(res=true){
        alert('User Creat sucsessfully')
        this.getalluser();   // page load pe jo data cahiya o function ko aha per bhi call kar do use apko refresh kar ne ke bad data milta tha o abhi record submit hone pe mil jaye ga 
      }else{
        alert('not')
      }
    })
  }
  ondelete(){}
}
