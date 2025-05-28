import { Component } from '@angular/core';
import {StopWatchComponent} from './stop-watch/stop-watch.component';

@Component({
  selector: 'app-root',
  imports: [StopWatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stop-watch';
}
