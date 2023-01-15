import { Injectable } from '@angular/core';
import { LocalStorageKeyConstant } from 'src/data/constants';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  // CONSTRUCTOR
  constructor() {}

  // PUBLIC METHODS
  get(): string | null {
    return window.localStorage.getItem(LocalStorageKeyConstant.ACCESS_TOKEN);
  }

  save(token: string): void {
    window.localStorage.setItem(LocalStorageKeyConstant.ACCESS_TOKEN, token);
  }

  clear(): void {
    window.localStorage.removeItem(LocalStorageKeyConstant.ACCESS_TOKEN);
  }
}
