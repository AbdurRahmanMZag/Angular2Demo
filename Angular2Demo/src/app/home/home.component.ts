import { Component } from '@angular/core';
import {UserPreferencesService } from '../employee/userPreferences.service';

@Component({
    template: `<h1>This is the home page</h1>
                <div>
                    Color preference:
                    <input type='text' [(ngModel)]='colour' [style.background]='colour'/>
                </div>
`
})
export class HomeComponent {
   
    constructor(private _userPreferencesService: UserPreferencesService) {
       
    }
    get colour() {
        return this._userPreferencesService.colorPreference;
    }

    set colour(value:string) {
        this._userPreferencesService.colorPreference = value;
    }
}