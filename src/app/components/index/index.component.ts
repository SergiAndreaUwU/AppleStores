import { Component, OnInit } from "@angular/core";
import { FruitService } from "src/app/services/fruit.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  redFruits: Array<any> = [];
  blueFruits: Array<any> = [];
  greenFruits: Array<any> = [];
  yellowFruits: Array<any> = [];
  brownFruits: Array<any> = [];

  buttonList: Array<any> = [
    {
      variant: "danger",
      category: "Red fruits",
      id: "red-fruit-button",
      bgImage: "assets/redfruits.jpg",
      fruitList: this.redFruits,
    },
    {
      variant: "primary",
      category: "Blue fruits",
      id: "blue-fruit-button",
      bgImage: "assets/bluefruits.jpg",
      fruitList: this.blueFruits,
    },
    {
      variant: "success",
      category: "Green fruits",
      id: "green-fruit-button",
      bgImage: "assets/greenfruits.jpg",
      fruitList: this.greenFruits,
    },
    {
      variant: "warning",
      category: "Yellow fruits",
      id: "yellow-fruit-button",
      bgImage: "assets/yellowfruits.jpg",
      fruitList: this.yellowFruits,
    },
    {
      variant: "brown",
      category: "Brown fruits",
      id: "brown-fruit-button",
      bgImage: "assets/brownfruits.jpg",
      fruitList: this.brownFruits,
    },
  ];

  constructor(private fruitService$: FruitService) {}

  ngOnInit() {
    this.fruitService$.getFruits().subscribe(
      (res) => {
        res.map((fruit) => {
          //avoid  duplicated entries
          if (!this[`${fruit.color}Fruits`].some((el)=>el.fruitName===fruit.category)) {
            this[`${fruit.color}Fruits`].push({
              fruitName: fruit.category,
              URL: fruit.category,
            });
          }
        });
      },
      (err) => {
        console.error("¡Someone do something!", err.message);
      }
    );
  }
}
