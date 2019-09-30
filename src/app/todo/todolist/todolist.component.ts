import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private data:DataService) { }
  list=[]
  ngOnInit() {
    this.list=this.data.getItem();
  }
  remove(i){
    this.data.del(i);
  } 
}
