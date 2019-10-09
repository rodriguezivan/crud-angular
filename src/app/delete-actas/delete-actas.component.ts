import { Component, OnInit, Input } from '@angular/core';
import { ActaService } from '../services/acta.service';
import { Acta } from '../interfaces/acta';

@Component({
  selector: 'app-delete-actas',
  templateUrl: './delete-actas.component.html',
  styleUrls: ['./delete-actas.component.css']
})
export class DeleteActasComponent implements OnInit {

  @Input() idActa: number;  

  constructor(private actaService: ActaService) { }

  ngOnInit() {
  }

  deleteActa(id: number) {
    this.actaService.delete(id).subscribe(result => {
      console.log(result);                            
    });        
  }
}
