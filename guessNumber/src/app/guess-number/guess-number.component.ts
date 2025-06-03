import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-number.component.html',
  styleUrl: './guess-number.component.scss'
})
export class GuessNumberComponent {

  // secretNumber: number = this.getSecretNumber();
  // attempts: number = 10;
  // guessNumber?: number;
  // message: string = '';
  // gameOver: boolean = false;


  // private static readonly MAX_ATTEMPTS = 10;
  // private static readonly MAX_NUMBER = 100;



  // getSecretNumber(): number {
  //   return Math.floor(Math.random() * GuessNumberComponent.MAX_NUMBER) + 1;
  // }

  // isValidGuess(guess?: number): boolean {
  //   return (guess !== undefined && guess >= 1 && guess <= GuessNumberComponent.MAX_NUMBER);
  // }

  // submitGuess(): void {
  //   if (!this.isValidGuess(this.secretNumber)) {
  //     this.message = `Please enter a number between 1 and ${GuessNumberComponent.MAX_NUMBER}`;
  //     return;
  //   }
  //   this.attempts--;
  //   this.checkedGame();
  // }

  // checkedGame(): void {
  //   if (this.guessNumber === this.secretNumber) {
  //     this.endGame(true);
  //   } else if (this.attempts === 0) {
  //     this.endGame(false);
  //   } else {
  //     this.message = this.guessNumber! > this.secretNumber ? 'Too high!' : 'Too low!';
  //   }
  // }



  // endGame(isWin: boolean): void {
  //   this.gameOver = true;
  //   this.message = isWin ? 'Congratulations! You guessed the number!' : `Game Over! The secret number was ${this.secretNumber}.`;
  // }

  // resetGame():void{
  //   this.secretNumber = this.getSecretNumber();
  //   this.attempts = GuessNumberComponent.MAX_ATTEMPTS;
  //   this.guessNumber = undefined;
  //   this.message = '';
  //   this.gameOver = false;
  // }

  secretNumber: number = this.getSecretNumber();
  attempts: number = 10;
  guessNumber?: number;
  message: string = '';
  gameOver: boolean = false;




  private static readonly MAX_ATTEMPTS = 10;
  private static readonly MAX_NUMBER = 100;



  getSecretNumber(): number {
    return Math.floor(Math.random() * GuessNumberComponent.MAX_NUMBER) + 1;
  }

  isValidGuess(guess?: number): boolean {
    return (guess !== undefined && guess >= 1 && guess <= GuessNumberComponent.MAX_NUMBER);
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.guessNumber)) {
      this.message = `Please enter a number between 1 and ${GuessNumberComponent.MAX_NUMBER}`;
      return;
    }
    this.attempts--;
    this.checkedGame();
  }

  checkedGame(): void {
    if (this.guessNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attempts === 0) {
      this.endGame(false);
    } else {

      this.message = this.guessNumber! > this.secretNumber ? 'Too high!' : 'Too low!';
    }
  }

  endGame(isWin: boolean): void {
    this.gameOver = true;
    this.message = isWin ? 'Congratulations! You guessed the number!' : `Game Over! The secret number was ${this.secretNumber}.`;
  }

  resetGame(): void {
  this.secretNumber = this.getSecretNumber();
  this.attempts = GuessNumberComponent.MAX_ATTEMPTS;
  this.guessNumber = undefined;
  this.message = '';
  this.gameOver = false;
  }



}
