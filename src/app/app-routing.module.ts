import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'characters',component: CharactersComponent},
  {path:'character/:id',component: CharacterComponent},
  {path:'error-404',component:NotFoundComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
