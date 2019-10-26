import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from './userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedRadioButtonValue: string = 'All';
    statusMessage: string ='Loading data. Please wait ....';

    constructor(private _employeeService: EmployeeService,
        private _userPreferencesService: UserPreferencesService) {
       
    }

    get colour() {
        return this._userPreferencesService.colorPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colorPreference = value;
    }

    ngOnInit() {
        this._employeeService.getEmployee()
            .subscribe((employeeData) => this.employees = employeeData,
                (error) => {
                    this.statusMessage = 'Problem with the service. Please try again sometime.';
                    console.error(error);
                });
    }

    getEmployeeCount(): number {
        return this.employees.length;
    }
    getMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender.toLowerCase() === "male").length;
    }
    getFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender.toLowerCase() === "female").length;
    }

    OnRadioButtonSelectionChange(newSelectedRadioButtonValue: string): void {
        this.selectedRadioButtonValue = newSelectedRadioButtonValue;
    }




}