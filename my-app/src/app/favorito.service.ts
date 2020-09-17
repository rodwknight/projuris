import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  constructor() { }

  private persons:any

  setData(data: any) {
    let dataStorage:any[] = JSON.parse(localStorage.getItem('favoritos'));
    if (dataStorage == null) {
      dataStorage = [];      
      dataStorage.push(data);
    } else {
      if (dataStorage.find(item => item.name == data.name))
        dataStorage =  dataStorage.filter(item => item.name != data.name);
      else 
        dataStorage.push(data);
    }
    localStorage.setItem('favoritos', JSON.stringify(dataStorage));
  }

  getData(name: String) {
    let dataStorage:any[] = JSON.parse(localStorage.getItem('favoritos'));
    if (dataStorage != null)
      return dataStorage.find(item => item.name == name)
  }
}
