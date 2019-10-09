import { Component, OnInit } from '@angular/core';
import { ActaService } from '../services/acta.service';
import { Acta } from '../interfaces/acta';

@Component({
  selector: 'app-list-actas',
  templateUrl: './list-actas.component.html',
  styleUrls: ['./list-actas.component.css']
})
export class ListActasComponent implements OnInit {

  public actas: Acta[];

  constructor(private actaService: ActaService) { }

  ngOnInit() {
    this.getAllActas();   
  }

  getAllActas() {    
    this.actaService.getAll().subscribe(result => {           
      this.actas = result;      
    });    
  }
  
}
