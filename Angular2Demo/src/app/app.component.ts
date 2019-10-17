import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <h1 [innerHtml]='getFullName()'></h1>
                    <my-employee></my-employee>
                    <button bind-disabled='isDisabled'>Click Me</button>
                </div>
                `
})
export class AppComponent {
    pageHeader: string = 'Page Header';
    isDisabled: boolean = false;
    firstName: string = 'AbdurRahman';
    lastName: string = 'Mahmoud';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
