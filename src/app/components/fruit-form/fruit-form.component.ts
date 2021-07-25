import { Component, OnInit, HostBinding } from '@angular/core';
import { Fruit } from 'src/app/models/fruit';

import {Router} from '@angular/router';

import {FruitService} from '../../services/fruit.service';

@Component({
  selector: 'app-fruit-form',
  templateUrl: './fruit-form.component.html'
})
export class FruitFormComponent implements OnInit {

 @HostBinding('class') classes='row';
 
 fruit: Fruit={
 id:0,
 title:'',
 description:'',
 image:'',
 created_at: ''

 };

  constructor(private fruitService:FruitService, private router:Router) { }

  ngOnInit() {
  }

  save(){
    delete this.fruit.id;
    delete this.fruit.created_at;


    this.fruitService.saveFruit(this.fruit).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/fruits']);
      },
      err=>{
        console.log(err)
      }
    )
  }
}
