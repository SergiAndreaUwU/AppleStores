import { FruitService } from 'src/app/services/fruit.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector:"fruit-details",
    templateUrl:"./fruit-details.component.html",
    styleUrls: ["./fruit-details.component.css"]
})

export class FruitDetails implements OnInit{

    fruitList=[]

    constructor(private fruitService$:FruitService){

    }

    ngOnInit(){
        this.fruitService$.getFruits().subscribe(
            res=>{
                console.log(res);
                this.fruitList=res
              },
              err=>{
                console.log(err)
              }
        )
    }

}