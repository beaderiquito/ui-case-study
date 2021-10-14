import { Component, OnInit} from '@angular/core';
import { SearchService } from '../search.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit{
  textField = new FormControl('')
  text: string = '';
  
  constructor(private searchService: SearchService) {  }

  ngOnInit(){
    this.searchService.currentSearchInput.subscribe(input => this.text = input);
  }

  submit(){
    this.searchService.updateSearchInput(this.textField.value);
  }

}
