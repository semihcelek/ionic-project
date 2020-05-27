import { Component, OnInit } from '@angular/core';
import { ListService} from '../list.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  list = [];
  items =[];

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(){

    this.list = this.listService.getList();
    this.items = this.listService.getData();


  }
 

}
