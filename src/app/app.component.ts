import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LojaComponent } from './loja/loja.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LojaComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']        
})
export class AppComponent {
  title = 'areatechbr';
}
