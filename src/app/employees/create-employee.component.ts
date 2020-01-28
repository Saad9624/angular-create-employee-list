import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department} from '../model/department.model' ;
import { Employee} from '../model/employee.model' ;


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  prviewPhoto = false ;

employee: Employee ={
  id                : null,
    name              :  null,
    gender            :  null,
    email             :  null,
    phoneNumber       :  null,
    contactPreference :  null,
    dateOfBirth       :  null,
    department        :  null,
    isActive          :  null,
    photoPath         :  null,

};

  depart: Department[] =[
    {id : 1 , name : 'Help Desk'},
    {id : 2 , name : 'Admin'},
    {id : 3 , name : 'HR'},
    {id : 4 , name : 'IT'},
    {id : 5 , name : 'Supply Chain'},
    {id : 6 , name : 'Sales'},
  ];


 

  gender = 'male' ;
  contact = 'phone' ;
  constructor() { }

  togglePhotoPreview(){
    this.prviewPhoto = !this.prviewPhoto;  
  }

  ngOnInit() {
  }

  saveEmployee(empForm : NgForm) : void{
    console.log(empForm.value)  ;
  }

}
