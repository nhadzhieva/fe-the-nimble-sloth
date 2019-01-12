import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { OrdersService } from '../../shared/services/orders.service';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder, private ordersService: OrdersService, private router: Router) {}

    ngOnInit() {
        this.form = this.fb.group({
            nameSender: [''],
            coordinatesSender: [''],
            nameReciever: [''],
            phoneReciver: [''],
            coordinatesReciever: [''],
            description: [''],
            price: [''],
            weight: [''],
            status: ['PENDING']
        });
    }

    send() {
        this.ordersService.createOrder(this.form.value);
        this.router.navigate(['/tables']);

    }
}
