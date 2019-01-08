import { ViewMedicinePage } from './../view-medicine/view-medicine';
import { AddMedicinePage } from './../add-medicine/add-medicine';
import { SignupPage } from './../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../app/models/User';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User

  constructor(
    private aFuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 async login(user:User){

  try {

    const res=  await this.aFuth.auth.signInWithEmailAndPassword(user.email, user.password);

    if(res != null){
      this.navCtrl.push(ViewMedicinePage);
    }
    console.log(res)
    
  } catch (error) {

    console.log(error);
    
  }
  

  }

  register(){
    this.navCtrl.push(HomePage);
  }


}
