import { Injectable } from '@angular/core';
import { BasicToDo } from '../basic-to-do';
import { common } from './common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import jsonList from '../db/db.json';

@Injectable({
  providedIn: 'root'
})
export class BasictodoService {

  constructor(private http:HttpClient) { }

  commonData: common = new common();
  param: HttpParams = new HttpParams();

  getData(reqID:string): Observable<any>{
    return this.http.get(this.commonData.serverurl + "/" + reqID);
  }

  postData(data:BasicToDo): Observable<any>{
    return this.http.post(this.commonData.serverurl + "/basictodo",data);
  }

  patchData(data:BasicToDo): Observable<any> {
    return this.http.patch(this.commonData.serverurl + "/basictodo/"+`${data.id}`,data);
  }

  deleteData(id){
    return this.http.delete(this.commonData.serverurl + "/basictodo/"+`${id}`);
  }

  getJsonList() {
    let bucketList = [];
    bucketList = jsonList;
    return bucketList;
  }
}
