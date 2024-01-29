import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilsService {

  constructor() { }

  // Helper function for images names
  dasherize(str: string) {
    return str.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
}
