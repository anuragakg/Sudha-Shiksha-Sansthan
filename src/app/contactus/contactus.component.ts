import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { AboutService } from '../_services/about.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;

  
  get f() { return this.contactForm.controls; }
  address:any;
  appname:string;
  constructor(private aboutService:AboutService,private fb:FormBuilder) {
    this.address=this.aboutService.getAddress();
    this.appname=environment.App_Name;

    this.contactForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      email: ['',[Validators.email,Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern('[0-9 ]{10}')]],
      subject: ['',[Validators.required]],
      message: ['',[Validators.required]],
    });
  }
  formData:any;
  onSubmit() {
    this.formData=this.contactForm.value;

  }

  ngOnInit(): void {}
}
