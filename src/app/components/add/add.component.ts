import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  users: any;

 

  public idAdd = '';
  public nameAdd = '';
  public usernameAdd: string = '';
  public emailAdd: string = '';
  public addressAdd = {
    streetAdd: '',
    suiteAdd: '',
    cityAdd: '',
    zipcodeAdd: '',
    geoAdd: {
      latAdd: '',
      lngAdd: '',
    }
  };
  public phoneAdd = '';
  public websiteAdd = '';
  constructor(private tutorialService: TutorialService , private router: Router) { }
  ngOnInit(): void {
  }
  
  saveAdd(): void {
  
    let id = Math.random().toString(36).substring(2) + new Date().getTime().toString();
    const data = {
      id,
      name: this.nameAdd,
      userName: this.usernameAdd,
      email: this.emailAdd,
      address: {
        city: this.addressAdd.cityAdd,
        street: this.addressAdd.streetAdd,
        suite: this.addressAdd.suiteAdd,
        zip: this.addressAdd.zipcodeAdd,
        Geo: {
          lat: this.addressAdd.geoAdd.latAdd,
          lgn: this.addressAdd.geoAdd.lngAdd
        },

      },
      phone: this.phoneAdd,
      website: this.websiteAdd

    }
    this.router.navigate(['/list'],{queryParams: {'data':JSON.stringify(data)}})

  }
  }
