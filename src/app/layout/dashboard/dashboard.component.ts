import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'YOU TRACK DELIVERIES, WE OPTIMIZE YOUR ROUTES',
                text:
                    'GET FEEDBACKABOUT DELIVERY DETAILSAND PROOF OF DELIVERYFROM YOUR DRIVER IN REAL TIME'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'PROVE YOUR DELIVERY IN FULL FASTER',
                text: 'GET FEEDBACKABOUT DELIVERY DETAILSAND PROOF OF DELIVERYFROM YOUR DRIVER IN REAL TIME'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'GET ON-TIME DELIVERY EVERY TIME',
                text:
                    'BOOST DRIVER\'S PERFORMANCETRACK YOUR VEHICLESEND NOTIFICATIONIN REAL TIME'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
