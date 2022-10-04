import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  
  images = ['Grundloser See 3.jpg', 'Grundloser See 7.jpg', 'Grundloser See 8.jpg'];
  headlines = [
    'Bring engineering to the next level.',
    'Born to code.',
    'Has never used stack overflow.'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 8000);
  }


}
