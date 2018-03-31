import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileOperationService{

    constructor(private http: HttpClient) {
    }

    public getJSON(fileName: string): Observable<any> {
         return this.http.get(fileName);

     }
}