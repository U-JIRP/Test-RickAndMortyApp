import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



// Components
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    LoadingComponent,
    NavbarComponent,
    CardsComponent,
    PaginationComponent,
    NotFoundComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoadingComponent,
    NavbarComponent,
    CardsComponent,
    PaginationComponent,
    NotFoundComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
