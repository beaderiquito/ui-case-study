import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchInput = new BehaviorSubject('');
  currentSearchInput = this.searchInput.asObservable();

  constructor() { }

  updateSearchInput(input: string){
    this.searchInput.next(input);
  }
}
