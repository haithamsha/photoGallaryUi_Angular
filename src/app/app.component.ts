import { Component } from '@angular/core';
import {Image} from './models/Image';
import {UploadImageService} from './services/upload-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-app';

  constructor(private uploadService:UploadImageService) {}

  addImage(image:Image) {
    this.uploadService.addImage().subscribe(todo => {
      this.addImage.push(image);
    })
  }
}
