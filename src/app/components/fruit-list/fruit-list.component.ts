import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FruitService} from '../../services/fruit.service';


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
 
  fruits: any=[];

  constructor(private fruitService: FruitService, private router:Router) { }

  ngOnInit() {
    this.getFruits(); 
    }

    getFruits(){this.fruitService.getFruits().subscribe(
      res => {
        this.fruits= res;
      },
      err=> console.log(err),
    )
  }
    deleteFruit(id: string) {
      this.fruitService.deleteFruit(id)
        .subscribe(
          res => {
            console.log(res);
            this.getFruits();
          },
          err => console.error(err)
        )
   }
  
   

}
