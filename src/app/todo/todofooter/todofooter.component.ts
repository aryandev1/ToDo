import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-todofooter',
  templateUrl: './todofooter.component.html',
  styleUrls: ['./todofooter.component.css']
})
export class TodofooterComponent implements OnInit {

  count=0

  constructor(private data:DataService) { 
    
  }
  ngOnInit() {
    setInterval(this.change,50);
  }

  change()
    {
      this.count=DataService.count;
      document.getElementById("pp").innerHTML="No. of items: "+this.count
    }
  
}
