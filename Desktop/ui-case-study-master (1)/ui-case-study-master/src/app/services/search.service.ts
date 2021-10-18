import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchTerm = '';

  constructor() { }

  updateSearchTerm(input: string){
    this.searchTerm = input;
    return this.searchTerm;
  }
}
