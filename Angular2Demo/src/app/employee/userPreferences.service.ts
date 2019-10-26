import { Injectable } from '@angular/core';

@Injectable()   
export class UserPreferencesService {
    constructor() {
        console.log('New instance of service created');
    }
    colorPreference: string = 'orange';
    
}