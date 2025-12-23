import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  // List of project images
  images: { src: string, alt: string }[] = [
    { src: 'assets/projects/image2.jpeg', alt: 'image 2' },
    { src: 'assets/projects/image3.jpeg', alt: 'image 3' },
    { src: 'assets/projects/image4.jpeg', alt: 'image 4' },
    { src: 'assets/projects/image5.jpeg', alt: 'image 5' },
    { src: 'assets/projects/image6.jpeg', alt: 'image 6' },
    { src: 'assets/projects/image7.jpeg', alt: 'image 7' },
    { src: 'assets/projects/image11.jpeg', alt: 'image 11' }
  ];
}
