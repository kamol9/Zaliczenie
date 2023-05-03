import { Component } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
})
export class CheckListComponent {
  listElements: { content: string }[] = [];
  addListElement() {
    this.listElements.push({ content: '' });
  }
}
