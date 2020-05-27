import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private data = [
      {
        content:[ 
          { id:0, inside:'Faturalar'},
          { id:1, inside:'Ev Kredisi'},
          { id:2, inside:'Araba kredisi'},
          { id:3, inside:'Okul Masraflari'},
          { id:4, inside:'Cep Telefonu Taksidi'},
          { id:5, inside:'Bilgisayar Taksidi'},
          { id:6, inside:'Tatil Plani'},
          { id:7, inside:'Internet Cafe'}
      ]
  
      },
   
    ];
    private list=[];

  constructor() { }
  getData(){
    return this.data;
  }
  getList(){
    return this.list;
  }
  addList(content){
    this.list.push(content);
  }
}
