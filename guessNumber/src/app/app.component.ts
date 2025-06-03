import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuessNumberComponent } from './guess-number/guess-number.component';

@Component({
  selector: 'app-root',
  imports: [GuessNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'guessNumber';
}
