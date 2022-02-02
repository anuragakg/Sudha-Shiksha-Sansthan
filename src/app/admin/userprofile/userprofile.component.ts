import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Users } from 'src/app/_models/users';
import { AccountService } from 'src/app/_services/account.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profileForm:FormGroup;
  
  user_profile:any;
  image:String='';
  edu_data=[];
  constructor(private acountService:AccountService,private fb:FormBuilder) { 
    this.acountService.getUser().subscribe((user)=>{
      
      this.user_profile=user;
      this.edu_data=user.education;
      this.image=environment.apiurl+'/'+ user.image;
      this.profileForm=this.fb.group({
        'name':[user.name,[Validators.required]],
        'email':[user.email,[Validators.required]],
        'phone':[user.phone,[Validators.required]],
        'education':this.fb.array([]),
        'skills':[user.skills,[Validators.required]],
        'address':[user.address],
        'acceptTerms':['',[Validators.required]],
      });
      if(user.education.length){
        user.education.forEach((row:any)=>{
          this.addEducation(row);
        });
      }else{
        this.addEducation();
      }
      
    });
  }
  education():FormArray{
    return this.profileForm.get("education") as FormArray  
  }
  edu_title='';
  newEducation(education?:any):FormGroup{
    this.edu_title='';
    //if(education.title !== undefined){
    if(typeof education === 'object' && 'title' in education){
      this.edu_title=education.title;
    }else{
      this.edu_title='';
    }
    return this.fb.group({
      title:[this.edu_title,[Validators.required]],
      certificate:['']
    })
  }
  addEducation(education?:any){

    this.education().push(this.newEducation(education))
  }
  removeEducation(i:number){
    this.education().removeAt(i)
  }
  ngOnInit(): void {
  }
  submitted=false;
  formData:any;
  error=false;
  message='';
  onSubmit(){
    this.submitted = true;
    this.formData=this.profileForm.value;
    
    
    // stop here if form is invalid
    if (this.profileForm.invalid) {
        return;
    }
    this.acountService.updateUser(this.formData).subscribe(
      data=>{
        this.error=false;
        this.message="Profile Updated successfully";
        this.user_profile=data.user;
      },
      error => {
        this.error=true;
        this.message=error;
      }
    )

  }
}
