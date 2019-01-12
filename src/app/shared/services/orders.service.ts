import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Order[];
  constructor(private db: AngularFireDatabase) {
    this.ordersRef = db.list(this.dbPath);
   }

  private dbPath = '/orders';
  ordersRef: AngularFireList<Order> = null;
  // orders$: AngularFireList<any[]>;
  createOrder(order: Order): void {
    this.ordersRef.push(order);
    // firebase.database().ref(this.basePath).push(order);
  }

  updateOrder(key: string, value: any): void {
    this.ordersRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteOrder(key: string): void {
    this.ordersRef.remove(key).catch(error => this.handleError(error));
  }
 
  getOrdersList() {
    const ref = firebase.database().ref('orders/');
    ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(childKey);
        console.log(childData);
        this.orders.push(childData);
      });
    });
    return this.orders;
    // starCountRef.on('value', function(snapshot) {
    // console.log(snapshot.val());
    // });
  }


  getAll() {
    return this.db.list('orders').valueChanges();
    // this.orders$ = this.db.list('/orders');
    // console.log(this.orders$);
  }
 
  deleteAll(): void {
    this.ordersRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
