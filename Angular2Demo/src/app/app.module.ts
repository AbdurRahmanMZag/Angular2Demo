import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TestModule } from './test.module';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';

import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './others/simple.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { EmployeeService } from './employee/employee.service';

import { UserPreferencesService } from './employee/userPreferences.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component:PageNotFoundComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
             TestModule ,RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent,HomeComponent, PageNotFoundComponent],
    providers: [EmployeeService,],
    bootstrap: [AppComponent],
})
export class AppModule { }
