import { Component, OnInit} from '@angular/core';
import { SearchService } from '../search.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent{
  searchTerm: string = '';
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    ) {  }

  submit(){
    this.searchService.updateSearchTerm(this.searchTerm);
    console.log(this.searchService.searchTerm);
    this.searchTerm = '';
  }
}
