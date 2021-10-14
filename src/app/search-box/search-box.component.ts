import { Component, OnInit} from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit{
  input: string = '';
  searchText: string='';
  
  constructor(private searchService: SearchService) {  }

  ngOnInit(){
    this.searchService.currentSearchInput.subscribe(input => this.input = input);
  }

  submit(){
    this.searchService.updateSearchInput(this.searchText);
  }

}
