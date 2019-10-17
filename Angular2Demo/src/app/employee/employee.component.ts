import {Component} from '@angular/core';

@Component({
    selector:'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent{
    firstName:string = 'AburRahman';
    lastName: string = 'Zaghloul';
    gender : string = 'Male';
    age: number = 37;
    colSpan: number = 2;
}