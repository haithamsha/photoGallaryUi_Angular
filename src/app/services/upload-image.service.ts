import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Image} from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  
  ImageListUrl:string = 'http://localhost:54324/images/listfiles';

  constructor(private http: HttpClient) { }

  getImageList(): Observable<Image[]>{
    return this.http.get<Image[]>(this.ImageListUrl)
  }

  deleteImage(image:Image):Observable<Image> {
    const url = `http://localhost:54324/images/${image.Id}`;
    return this.http.delete<Image>(url);
  }

  deleteAll(image:string):Observable<string> {
    const url = `http://localhost:54324/images/DeleteAll`;
    return this.http.delete<string>(url);
  }
  
}
