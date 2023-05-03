import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rezerwacja',
  templateUrl: './rezerwacja.component.html',
  styleUrls: ['./rezerwacja.component.css'],
})
export class RezerwacjaComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
