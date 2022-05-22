import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ComponentsModule } from '../components/components.module';

// Components
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';
import { EpisodesComponent } from './episodes/episodes.component';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    HomeComponent,
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
