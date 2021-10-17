import { Component, OnInit} from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit{
  searchInput = new FormControl('', Validators.required);
  searchTerm: string = '';

  constructor(
    public searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
    ) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  }

  submit(): void{
    this.searchTerm = this.searchInput.value;
    this.searchInput.reset();
    this.searchService.updateSearchTerm(this.searchTerm);
    console.log(this.searchService.searchTerm);
    this.router.navigateByUrl('/products/' + this.searchTerm);
  }
}
