import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output() searchQuery = new EventEmitter<string>();
  
  search(value: string) {
    this.searchQuery.emit(value);
  }
}
