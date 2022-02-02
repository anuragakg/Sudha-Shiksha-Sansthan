import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  currentYear=new Date().getFullYear();
  constructor(private fb:FormBuilder,private accountservice:AccountService,private router:Router) {
    this.loginForm=this.fb.group({
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  formData:any;
  isSubmit=false;
  error=false;
  message='';
  userdata:any;
  onSubmit(){
    this.isSubmit=true;
    this.formData=this.loginForm.value;
    
    if(this.loginForm.invalid){
      return ;
    }
    this.accountservice.login(this.formData)
    
    .subscribe(
      data => {
        this.router.navigate(['dashboard']);
        console.log(data)
      },
      error => {
        this.error=true;
        this.message=error;
      }
    );
  }
}
