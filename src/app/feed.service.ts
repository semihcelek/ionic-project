import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private data = [
    {
      category: 'Ekonomik',
      expanded: true,
      content:[ 
        { id:0, inside:'Tüketici hakem heyetleri, yılın ilk 4 ayında 180 bin 466 başvuru alırken, 165 bin 84 başvuruyu karara bağladı. Elektronik ortamda gerçekleştirilen başvuru oranı yeni tip koronavirüs (Kovid-19) salgını nedeniyle nisanda yüzde 80 civarında gerçekleşti.'},
        { id:1, inside:'Ekonomi cooohhh eyi'},
        { id:2, inside:'Ekonomi cooohhh eyi'},
        { id:3, inside:'Ekonomi cooohhh eyi'},
        { id:4, inside:'Ekonomi cooohhh eyi'}
    ]

    },
    {
      category: 'Sosyal',
      expanded: true,
      content:[ 
        { id:0, inside:'Ekonomi cooohhh eyi'},
        { id:1, inside:'Ekonomi cooohhh eyi'},
        { id:2, inside:'Ekonomi cooohhh eyi'},
        { id:3, inside:'Ekonomi cooohhh eyi'},
        { id:4, inside:'Ekonomi cooohhh eyi'}
    ]

    },
    {

    }
  ];
  private feed =[];

  constructor() { }

  getData(){
    return this.data;
  }
  getFeed(){
    return this.feed;
  }
  addFeed(content){
    this.feed.push(content);
  }
}
