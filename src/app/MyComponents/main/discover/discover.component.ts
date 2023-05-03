import { Component } from '@angular/core';
import { FlexAlignDirective } from '@angular/flex-layout';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageUrl: string;
}
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent {
  tiles: Tile[] = [
    {
      text: 'Azja',
      cols: 3,
      rows: 2,
      color: 'lightblue',
      imageUrl: '../../../assets/asean.png',
    },
    {
      text: 'Europa',
      cols: 1,
      rows: 4,
      color: 'lightgreen',
      imageUrl: '../../../assets/eu.png',
    },
    {
      text: 'Ameryka',
      cols: 1,
      rows: 2,
      color: 'lightpink',
      imageUrl: '../../../assets/us.png',
    },
    {
      text: 'Afryka',
      cols: 2,
      rows: 2,
      color: '#DDBDF1',
      imageUrl: '../../../assets/za.png',
    },
  ];

  tiles2: Tile[] = [
    {
      text: 'Popularne',
      cols: 1,
      rows: 2,
      color: 'pink',
      imageUrl: '../../../assets/popular.jpg',
    },
    {
      text: 'Nowe',
      cols: 1,
      rows: 2,
      color: 'yellow',
      imageUrl: '../../../assets/new.png',
    },
  ];
}
