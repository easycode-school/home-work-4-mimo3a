import { Component } from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']

})

export class CarComponent {
    public car = {
        make: 'Ford',
        miliage: 87000,
        tankValue: 60,
        fuelAmount: 25,
        info: [
            'ingeen 1.8',
            'max speed 200 km/h',
            'clirence 180 mm'
        ]
    };
    public miliage = 170;
    refuel () {
        this.car.fuelAmount = 60;
    }
    drive () {
        this.car.fuelAmount --;
        this.car.miliage ++;
    }
}
