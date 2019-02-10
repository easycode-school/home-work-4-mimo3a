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
    //  Заправка до полного бака 60 литров
    refuel() {
        this.car.fuelAmount = 60;
    }
    // При каждом клике топливо уменьшается на 1 литр, пробег увеличивается на 20 км
    drive() {
        this.car.fuelAmount--;
        this.car.miliage += 20;
    }
}
