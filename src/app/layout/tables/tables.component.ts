import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Order } from '../../shared/models/order';
import { OrdersService } from '../../shared/services/orders.service';
import { AngularFireList, AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import { Observable } from '../../../../node_modules/rxjs';
import * as firebase from 'firebase';

 
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    orders$: Observable<any[]>;
    orders: any[];
    constructor(private ordersService: OrdersService, private af: AngularFireDatabase) {}

    ngOnInit() {

    // this.af.list('orders').valueChanges()
    // .subscribe((data) => {
    //     this.orders = data;
    // });
    this.getOrders();

    }

    getOrders() {
        this.ordersService.getAll().subscribe((data) =>{
            this.orders = data;
        });
    }
}
