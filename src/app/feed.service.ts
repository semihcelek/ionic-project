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
        { id:0, inside:'Ekonomi cooohhh eyi'},
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
