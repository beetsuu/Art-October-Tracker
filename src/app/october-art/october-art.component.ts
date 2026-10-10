import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as data from '../prompts.json';

@Component({
  selector: 'app-october-art',
  imports: [DatePipe],
  templateUrl: './october-art.component.html',
  styleUrl: './october-art.component.scss'
})

export class OctoberArtComponent implements AfterViewInit  {
prompt1 = "woohoo";
myDate = new Date();
dateDay = this.myDate.getDate()-1;
prompts: any = (data as any).default;

  @ViewChild('lala')
  lala!: ElementRef<HTMLImageElement>;

  x = 10;
  y = 10;

  speedX = 0.5;
  speedY = 0.5;
  
  rotation = 0;
  rotationSpeed = 0.6;

  ngAfterViewInit() {
    this.animate();
  }

  animate() {
    const image = this.lala.nativeElement;

    this.x += this.speedX;
    this.y += this.speedY;
      this.rotation += this.rotationSpeed;

    if (
      this.x + image.offsetWidth >= window.innerWidth ||
      this.x <= 0
    ) {
      this.speedX *= -1;
    }

    if (
      this.y + image.offsetHeight >= window.innerHeight ||
      this.y <= 0
    ) {
      this.speedY *= -1;
    }

    image.style.transform =
      `translate(${this.x}px, ${this.y}px)rotate(${this.rotation}deg)`;

    requestAnimationFrame(() => this.animate());
  }
}
