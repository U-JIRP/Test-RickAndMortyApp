import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagination } from 'src/app/interfaces/pagination.interface';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pagination: Pagination = {} as Pagination;
  href: string = '';
  search: string = '';



  constructor(public apiService:ApiService, 
              private router:Router,
              private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    let search = this.activatedRoute.snapshot.queryParams.search;
    this.search =  (search === undefined) ? '' : search;
    console.log( this.search);
  }

  goPrev(page:number){
    this.href = this.getURL();

    if(page === 1){
      if(this.search !== ''){
        this.router.navigate([this.href],{
          queryParams:  { search : this.search}
        });
      }
      else{
        this.router.navigateByUrl(this.href);
      }
    }
    else{
      if(this.search !== ''){
        
        this.router.navigate([this.href],{
          queryParams:  { page: page ,
                          search : this.search
                        }
        });
      }
      else{
        console.log('No busqué a alguien');
        this.router.navigate([this.href],{
          queryParams: { page: page}
        });
      }
    }  
  }

  goNext(page:number){
    this.href = this.getURL();
    console.log(page);

    if(this.search !== ''){
        this.router.navigate([this.href],{
          queryParams:  { page: page ,
                          search : this.search
                        }
        });
    }
    else{
      this.router.navigate([this.href],{
        queryParams: { page: page}
      });
    }
  }

  getURL():string{
    let url = this.router.url;
    let path = (url.includes('?') === true) ? url.substring(0,url.indexOf('?'))  : url;
    return path;
  }

}
