import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acta } from '../interfaces/acta';


@Injectable({
  providedIn: 'root'
})
export class ActaService {
   
  private api = "http://rodriguezivan.com/api-concejo-deliberante/v1/index.php";  

  constructor(private http: HttpClient) { }

  getAll() {
    let endpoint = this.api + "/actas";
    
    return this.http.get<Acta[]>(endpoint);    
  }

  save(newActa: Acta) {
    let endpoint = this.api + "/actas";

    return this.http.post(endpoint, newActa);
  }

  delete(id: number) {
    let endpoint = this.api + "/actas/" + id;

    return this.http.delete(endpoint);
  }  
    
}
