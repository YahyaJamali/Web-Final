import { LoginPage } from './../login/login';
import { User } from './../../app/models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User

  constructor(
    private aFuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  login(){
    this.navCtrl.push(LoginPage);
  }

  async register(user: User) {

    try {

      const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.makeToast("User Created Successfully");
      this.navCtrl.push(LoginPage);
      console.log(result);

    } catch (error) {

      console.log(error);

    }


  }

  makeToast(message:string){
    let toast = this.toastCtrl.create({
      message : message,
      duration : 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
