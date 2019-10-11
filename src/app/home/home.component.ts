import { Component, OnInit } from '@angular/core';
import {faLocationArrow, faChevronDown, faTruck, faEllipsisV, faCheckCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  faChevronDown = faChevronDown;
  faLocationArrow = faLocationArrow;
  faEllipsisV = faEllipsisV;
  faTruck = faTruck;
  faPlusCircle = faPlusCircle;
  list: Array<any> = [ {diaSemana: 'Monday', dia: 10, sup: 'th', hr: '2:28', tm: 'PM',
                          direccion1: 'Houston, TX, 33619', direccion2: 'Atlanta, GA,30123', price: '$250.00'},
                          {diaSemana: 'Monday', dia: 10, sup: 'th', hr: '2:28', tm: 'AM',
                          direccion1: 'Houston, TX, 33619', direccion2: 'Atlanta, GA,30124' , price: '$250.00'},
                          {diaSemana: 'Monday', dia: 10, sup: 'th', hr: '2:28', tm: 'PM',
                          direccion1: 'Houston, TX, 33619', direccion2: 'Atlanta, GA,30125' , price: '$250.00'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
