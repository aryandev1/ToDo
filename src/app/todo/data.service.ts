import { Injectable } from '@angular/core';
// import { TodofooterComponent } from './todofooter/todofooter.component'

@Injectable()

export class DataService{

    constructor() {  }


    items=[]
    static count=0
    addItem(str:String)
    {
        if(str!="")
        {
            this.items.push(str);
            DataService.count++;
            // this.footer.change();
        }
       
    }

    getCount()
    {
        console.log(DataService.count)
       
        return +(DataService.count);

    }

    getItem()
    {
        return this.items;
    }
    del(i:number){
        this.items.splice(i,1);
        DataService.count--;
    }
}