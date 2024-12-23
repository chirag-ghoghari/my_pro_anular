import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,JsonPipe,CommonModule,FormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit{

  
    userform:FormGroup = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(4)]),
      username: new FormControl(""),
      email: new FormControl("",[Validators.email]),
      password: new FormControl("",[Validators.required]),
      confirmpassword: new FormControl("",[Validators.required]),
      });

      fomfom:any='';
      fomfom2:any='';

      onno(){
        this.fomfom = this.userinf.password;  
        console.log(this.fomfom);
        this.fomfom2 = this.userinf.confimpasswordpassword;  
        console.log(this.fomfom2);
      }
      



userinf:any = {
  "id": 0,
  "name": "",
  "username": "",
  "email": "",
  "password": "",
  "confimpassword": ""
}

http= inject(HttpClient)



onsave() {
  // this.a = this.userinf
  debugger;
  this.userinf = this.userform.value;

  this.fomfom = this.userinf.password;

  this.fomfom2 = this.userinf.confirmpassword;


  this.http.post("http://localhost:3000/userinfo",this.userinf).subscribe((res:any)=>{  

    if(this.fomfom == this.fomfom2){
      if(res=true){
        alert('User Creat sucsessfully')
        this.getalluser();   // page load pe jo data cahiya o function ko aha per bhi call kar do use apko refresh kar ne ke bad data milta tha o abhi record submit hone pe mil jaye ga 
      }
    }
    else if (this.fomfom !== this.fomfom2){
      alert('Password dont match')
    }
  })
 }




// onsave() {
//   // this.a = this.userinf
//   debugger;
//   this.userinf = this.userform.value;

//   this.http.post("http://localhost:3000/userinfo",this.userinf).subscribe((res:any)=>{  

//     if(res=true){
//       alert('User Creat sucsessfully')
//       this.getalluser();   // page load pe jo data cahiya o function ko aha per bhi call kar do use apko refresh kar ne ke bad data milta tha o abhi record submit hone pe mil jaye ga 
//     }else{
//       alert('not')
//     }
//   })
//  }


 ngOnInit(): void {       //page load to call any function in including to oninit life cycle  event
  this.getalluser();    //call function 
}


a:any;
getalluser(){
 this.http.get("http://localhost:3000/userinfo",this.userinf).subscribe((res:any)=>{  
   this.a=res;
 })
}

onEdit(data:any){
  debugger;
  this.userinf =data ;
  this.userform.patchValue(this.userinf);
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


