import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Character } from 'src/app/interfaces/character.interface';
import { Pagination } from 'src/app/interfaces/pagination.interface';
import { Result } from 'src/app/interfaces/Result.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  load:boolean = false;
  currentPage:number = 1;
  query: string = '';
  pagination: Pagination = {} as Pagination;
  errorMessage:string = '';

  constructor(private apiService:ApiService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
                      .subscribe( () => {
                        let search = this.activatedRoute.snapshot.queryParams.search;
                        let page   = this.activatedRoute.snapshot.queryParams.page;

                        if(search === undefined && page === undefined){

                          this.currentPage = 1;
                          this.query = '';

                          this.getData(this.currentPage, this.query);

                        }
                        else{
                          
                          this.currentPage = (Number.isNaN(Number(page)) === true || page < 1) ? 1 : Number(page);
                          this.query = (search === undefined) ? '' : search;

                          this.getData(this.currentPage, this.query);
                        }
                        
                        

                      });
  }

  ngOnInit(): void {}


  getData(page:number, query:string): void {
    this.load = true;
    this.apiService.getCharacters(page, query).subscribe((resp:Result) => {
      this.characters = resp.results;
      this.pagination.currentPage = this.currentPage;

      if(query === ''){

        let prev = resp.info.prev?.substring(resp.info.prev.indexOf('=') + 1, resp.info.prev.length );
        let next = resp.info.next?.substring(resp.info.next.indexOf('=') + 1, resp.info.next.length );

        this.pagination.prevPage = Number(prev === undefined ? 0 : prev);
        this.pagination.nextPage = Number(next === undefined ? 0 : next);

      }
      else{
        
        let prev = resp.info.prev?.substring(resp.info.prev.indexOf('=') + 1, resp.info.prev.lastIndexOf('&'));
        let next = resp.info.next?.substring(resp.info.next.indexOf('=') + 1, resp.info.next.lastIndexOf('&'));

        this.pagination.prevPage = Number(prev === undefined ? 0 : prev);
        this.pagination.nextPage = Number(next === undefined ? 0 : next);
      }
      

      this.load = false;
      console.log(this.pagination.prevPage, this.pagination.nextPage);
      
    }, (err) => {
      this.load = false;
      this.errorMessage = err.message;
    });
  }

}
