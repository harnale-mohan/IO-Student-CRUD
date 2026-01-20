import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  constructor() { }

  getUniqueNumber(): number {
  return Math.floor(Math.random() * 1000000);
}
}
