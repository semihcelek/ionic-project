import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

feed = [];
items =[];

slideOpts = {
  centeredSlides: true,
  slidesPerView: 1.6,
  spaceBetween: 10,

}
  constructor(private feedService: FeedService, private router: Router) { }

  ngOnInit(){

    this.feed = this.feedService.getFeed();
    this.items = this.feedService.getData();


  }
}
