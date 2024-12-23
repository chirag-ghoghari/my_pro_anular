
import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    userObj:any ={
    username: '',
    password: '',
  }
  router=inject(Router)
  
 
  // onlogin(){
    
  //   if(this.userObj.username == "admin" && this.userObj.password == "1234" ){
  //     alert("login successfully");
  //     // localStorage.setItem('loginuser',this.userObj.username)
  //     this.router.navigateByUrl('ragister');
  //   } 
  //   else{
  //     alert(this.router.navigate(['ragister']));
  //   }
  // }
  http = inject (HttpClient);
   
  userlist:any[]=[];
  
    onlogins(){
      
     this.http.get("http://localhost:3000/register").subscribe((res:any)=>{    
      // let username = this.userObj.username;
      // let password = this.userObj.password;
      // console.log("username --->",username);
      // console.log("password --->",password);

      
      

        res.map((val:any)=>{
          // // debugger;
          // console.log("enter email::::::>",this.userObj.username);
          // console.log("enter email::::::>", this.userObj.password);
          // console.log("api email:",val.user)
          
          if(this.userObj.username == val.username && this.userObj.password == val.password ){
            debugger;
            alert("login successfully");
            localStorage.setItem('loginuser',this.userObj.username);
            this.router.navigate(['/home']);
            return val;
          }
          // }else if(this.userObj.username !== val.username && this.userObj.password !== val.password){
          //   alert("invalid username and password");
          //   return val;
          // }
          
        })
        // this.userlist = res;
    })

}
}
