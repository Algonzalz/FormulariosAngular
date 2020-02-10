import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatternService {

  constructor() { }
  validateUser(event): void {
    const keyCode = event.keyCode;
    console.log(event.keyCode);
    const excludedKeys = [8, 46, 95, 45, 46];

    if (!((keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      (keyCode >= 48 && keyCode <= 57) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }
  validateFullName(event): void {
    const keyCode = event.keyCode;
    const excludedKeys = [8, 32, 180, 39];

    if (!((keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }
  validateEmail(event): void {
    const keyCode = event.keyCode;
    const excludedKeys = [8];

    if (!((keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }
  validatePassword(event): void {
    const keyCode = event.keyCode;
    const excludedKeys = [8];

    if (!((keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }
}
