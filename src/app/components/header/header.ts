import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

type HeaderPage = 'portfolio' | 'projects' | 'cycling';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class Header {
  @Input() page: HeaderPage = 'portfolio';
  @Output() stravaClick = new EventEmitter<void>();
}
