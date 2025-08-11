import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';


const COMPONENTS = [Header]

@Component({
  selector: 'app-main',
  imports: [
    COMPONENTS,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
