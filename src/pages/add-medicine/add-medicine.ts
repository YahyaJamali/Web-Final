import { ViewMedicinePage } from './../view-medicine/view-medicine';
import { Data } from './../../app/models/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';

/**
 * Generated class for the AddMedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-medicine',
  templateUrl: 'add-medicine.html',
})
export class AddMedicinePage {

  data : Data = {

    name: '',
    qty:'',
    date:'',
    time:''

  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private srv: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMedicinePage');
  }

  addMedicine(data:Data){
    this.srv.addData(data).then(ref => {
        this.navCtrl.push(ViewMedicinePage);
    });
  }

}
