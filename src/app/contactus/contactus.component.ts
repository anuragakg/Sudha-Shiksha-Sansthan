import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { AboutService } from '../_services/about.service';
import { environment } from 'src/environments/environment';
import { ContactEmailService } from '../_services/contact-email.service';
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
  constructor(private aboutService:AboutService,private fb:FormBuilder,private contactEmail:ContactEmailService) {
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
  mailSent=false;
  sentMessage:string='';
  onSubmit() {
    this.formData=this.contactForm.value;
    if (this.contactForm.invalid) {
      return;
    }
    this.contactEmail.sendEmail(this.formData).subscribe((response)=>{
      if(response.status){
        this.mailSent=true;
        this.sentMessage=response.message;
        this.contactForm.reset();
        setTimeout(() => {
          this.mailSent=false;
        }, 4000);
      }
    })

  }

  ngOnInit(): void {}
}
