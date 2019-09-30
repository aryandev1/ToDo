import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css']
})
export class TodoinputComponent implements OnInit {

  constructor(private data:DataService) { }
  str=""
  ngOnInit() {
    
  }
  count
  add()
  {
    this.data.addItem(this.str);
    this.count=this.data.getCount();
  }


}
