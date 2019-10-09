import { Component, OnInit } from '@angular/core';
import { Acta } from '../interfaces/acta';
import { ActaService } from '../services/acta.service';

@Component({
  selector: 'app-add-actas',
  templateUrl: './add-actas.component.html',
  styleUrls: ['./add-actas.component.css']
})
export class AddActasComponent implements OnInit {

  newActa: Acta = {};
  
  constructor(private actaService: ActaService) { }

  ngOnInit() {
  }

  saveActa() {           
    this.actaService.save(this.newActa).subscribe(result => {
      console.log(result);               
    });
  }

}
