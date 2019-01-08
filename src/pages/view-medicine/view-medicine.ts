import { AddMedicinePage } from './../add-medicine/add-medicine';
import { Data } from './../../app/models/data';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Generated class for the ViewMedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-medicine',
  templateUrl: 'view-medicine.html',
})
export class ViewMedicinePage {

  dataList: Observable<Data[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private srv:DataProvider) {

      this.dataList = this.srv.getDataList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMedicinePage');
  }

  addMed(){
    this.navCtrl.push(AddMedicinePage);
  }

}
