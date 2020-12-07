import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TutorialService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: any = [];
  // currentUser = null;
  // currentIndex = -1;
  name: any;
  public idEdit = "";
  public nameEdit = "";
  public usernameEdit = "";
  public emailEdit = "";
  public addressEdit = {
    streetEdit: "",
    suiteEdit: "",
    cityEdit: "",
    zipcodeEdit: ""
  };
  public phoneEdit = "";
  public companyEdit = {
    // streetEdit : ""
  };
  constructor(private serviceService: TutorialService,
    public activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.readUser();
  }
  readUser(): void {
    // this.serviceService.getAll().subscribe(users => {
    //   this.users = users;
    //   console.log(users);
    //   this.activatedRoute.queryParams.subscribe(param => {
    //     console.log(param);
    //     if (param != null && param.data.length !== 0) {
    //       this.users.push(JSON.parse(param.data))
    //     }
    //     // console.log(this.users);
    //   })
    // },
    //   error => {
    //     console.log(error);
    //   });
    this.serviceService.getAll().subscribe(user=>{
      this.users=user;
      this.activatedRoute.queryParams.subscribe(param=>{
        if(param !== null && param.data.length != 0){
          this.users.push(JSON.parse(param.data))
        }
      })
    }, error =>{
      console.log('error', error);
      
    })
  }
  // refresh(): void {
  //   this.readUser();
  //   this.currentUser = null;
  //   this.currentIndex = -1;
  // }
  // setCurrentUser(user: any, index:any): void {
  //   this.currentUser = user;
  //   this.currentIndex = index;
  // }
  deleteAllUsers(): void {
    // this.serviceService.deleteAll()
    //   .subscribe(
    //     response => {
    //       console.log("success", response);
    //       this.readUser();
    //     }, error => {
    //       console.log("error", error);
    //     });
        
    this.users = [];
  }


  deleteUser(id: any): void {
    console.log(id);
    this.users = this.users.filter((u: { id: any; }) => u.id != id);
    console.log(this.users);
    // this.UserService.delete(id).subscribe(response =>{
    //   this.readUser();
    // })
  }
  save() {
    let index = this.users.findIndex((u: { id: string; }) => u.id == this.idEdit);
    this.users[index].name = this.nameEdit;
    this.users[index].username = this.usernameEdit;
    this.users[index].email = this.emailEdit;
    this.users[index].address.street = this.addressEdit.streetEdit;
    this.users[index].address.suite = this.addressEdit.suiteEdit;
    this.users[index].address.city = this.addressEdit.cityEdit;
    this.users[index].address.zipcode = this.addressEdit.zipcodeEdit;
    this.users[index].phone = this.phoneEdit;
    // this.users[index].company.street = this.companyEdit.streetEdit;
    this.idEdit = "";
    alert("Cap nhap thanh cong!!");
  }
  editUser(id: any): void {
    this.idEdit = id;
    let index = this.users.findIndex((u: { id: any; }) => u.id == id);
    this.nameEdit = this.users[index].name;
    this.usernameEdit = this.users[index].username;
    this.emailEdit = this.users[index].email;
    this.addressEdit.streetEdit = this.users[index].address.street;
    this.addressEdit.suiteEdit = this.users[index].address.suite;
    this.addressEdit.cityEdit = this.users[index].address.city;
    this.addressEdit.zipcodeEdit = this.users[index].address.zipcode;
    this.phoneEdit = this.users[index].phone;
    //this.companyEdit.streetEdit = this.users[index].company.street;
  }
}
