import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { Info } from 'src/app/interfaces/info.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character = {} as Character;
  errorMessage: string = '';
  constructor(private apiService:ApiService, 
              private activatedRoute: ActivatedRoute, 
              private location: Location) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.apiService.getCharacter(id).subscribe((resp:Character) => {
      this.character = resp;
    }, (err) => {
      this.errorMessage = err.message;
    })
  }

  goBack(){
    this.location.back();
  }

}
