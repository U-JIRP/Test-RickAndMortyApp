import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() characters:Character[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  details(id:number){
    this.router.navigate(['/character',id]) 
  }

}
