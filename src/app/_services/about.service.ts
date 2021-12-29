import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }
  serviceTypes:any;
  getWhoWeAre(){
    this.serviceTypes=[
      {
        image:'../assets/images/donation3.jpeg',
        type:'Food'
      },
      {
        image:'../assets/images/DonationCamp1.jpeg',
        type:'Survival'
      },
      {
        image:'../assets/images/DonationCamp2.jpeg',
        type:'Protection'
      }
    ];
    return {
      info:' We pledge to create an enabling mechanism to impart training and upskill the workforce to facilitate rightful employment and a life of dignity and independence. Our efforts are geared towards equipping the young people especially from the under-served segments to enter the workforce with skills that guarantee them a job commensurate their aptitude and efforts. It will be our Endeavour to directly work with the youth but also initiate a behavioral and attitudinal change amongst their family members and the community at large. Our efforts will also be specifically directed towards empowering women to join the skilled workforce and become ambassadors of our mission in their respective communities. Our intervention falls in line with the ambitious plans of the Government of India to transform India into a highly competitive, high growth and high productivity income country. By enabling a seamless transition of the workforce to the job sector, our larger goal is to ensure that their dependence of government welfare schemes decrease manifold and that they become the creators of their own destiny. By empowering them with the requisite know-how and helping them attain a threshold income for themselves, we will strive to impart greater self-confidence, inclusion and the feeling of belonging to the society and the country they live in. ',
      services:this.serviceTypes
      
    };
  }
  getAddress(){
    return {
      address:'Near Shiv Temple,Block A, Gali number 2, Rishabh Vihar,Modinagar',
      district:'Ghaziabad',
      state:'Uttar Pradesh',
      pincode:'201204',
      phone:'9557383034',
      emailId:'sudhashikshasanstha@gmail.com'
    }
  }
}
