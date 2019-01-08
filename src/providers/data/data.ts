import { Data } from './../../app/models/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private dbRef = this.db.list<Data>('note-list');

  constructor(public http: HttpClient,private db: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }


addData(data: Data) {
    return this.dbRef.push(data);
}

getDataList() {
  return this.dbRef;
}

}
