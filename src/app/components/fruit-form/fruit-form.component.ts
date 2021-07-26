import { Component, OnInit, HostBinding } from "@angular/core";
import { IFruit } from "src/app/models/fruit";

import { Router } from "@angular/router";

import { FruitService } from "../../services/fruit.service";

@Component({
  selector: "app-fruit-form",
  templateUrl: "./fruit-form.component.html",
})
export class FruitFormComponent implements OnInit {

  fruit: IFruit = {
    id: 0,
    title: "",
    description: "",
    image: "",
    created_at: "",
  };

  constructor(private fruitService$: FruitService, private router: Router) {}

  ngOnInit() {
    const currentUrl = this.router.url;
    const id = currentUrl
      .split("/")
      .splice(-1)
      .reduce((acc, val) => val);
    console.log(id);
    this.fruitService$.getFruit(id).subscribe(
      (res) => {this.fruit=res},
      (err) => {}
    );
  }

  save() {
    delete this.fruit.id;
    delete this.fruit.created_at;

    this.fruitService$.saveFruit(this.fruit).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/fruits"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
