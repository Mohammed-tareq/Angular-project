import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-stop-watch',
  imports: [CommonModule],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.scss'
})
export class StopWatchComponent {
  startTime:number=0;
  running:boolean=false;
  interval:any;

  startStop(){
    this.running ? this.stop() : this.start();
  }


  start(){
    this.running = true;
    this.interval = setInterval(()=>{
      this.startTime += 0.1;
    },100);
  }

  stop(){
    this.running = false;
    clearInterval(this.interval);
  }

  reset(){
    this.stop();
    this.startTime = 0;
  }

  
}
