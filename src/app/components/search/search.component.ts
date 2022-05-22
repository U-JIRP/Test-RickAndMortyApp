import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(name:string){

    if(name.length > 0){
      this.router.navigate(['/characters'],{
        queryParams: { search : name.toLowerCase()}
      });
    }
    else{
      this.router.navigateByUrl('/characters');
    }
    

  }

}
