import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getData();
  }

  fetch(){
    this.getData();
  }

  getData() {
    // this.appService.fetchData().subscribe(data => {
    //   console.log('Data received:', data);
    // });
    this.appService.fetchData().subscribe(data => {
      console.log('Data:', data);
    });
  }

}
