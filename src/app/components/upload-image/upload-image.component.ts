import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Image} from '../../models/Image';
import {UploadImageService} from '../../services/upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  

  images:Image[];
  constructor(private uploadImageService:UploadImageService) { }

  ngOnInit() {
    this.uploadImageService.getImageList().subscribe(images => {
      this.images = images;
    })
  }

  _deleteImage(image:Image) {
    // Remove image from UI.
    this.images = this.images.filter(i => i.Id !== image.Id);
    // Remove image from database
    this.uploadImageService.deleteImage(image).subscribe();
  }

  _deleteAll(image:Image) {
    // Remove image from UI.
    this.images = []
    // Remove image from database
    var msg = "";
    this.uploadImageService.deleteAll(msg).subscribe();
  }

}
