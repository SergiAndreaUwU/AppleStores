import { Component, OnInit } from "@angular/core";

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
    { variant: "danger", category: "Red fruits", id: "red-fruit-button", bgImage: "assets/redfruits.jpg", fruitList: [{fruitName:"Apple",url:"#"}] },
    { variant: "primary", category: "Blue fruits", id: "blue-fruit-button", bgImage: "assets/bluefruits.jpg", fruitList: [] },
    { variant: "success", category: "Green fruits", id: "green-fruit-button", bgImage: "assets/greenfruits.jpg", fruitList: [] },
    { variant: "warning", category: "Yellow fruits", id: "yellow-fruit-button", bgImage: "assets/yellowfruits.jpg", fruitList: [] },
    { variant: "brown", category: "Brown fruits", id: "brown-fruit-button", bgImage: "assets/brownfruits.jpg", fruitList: [] },
  ];

  constructor() {}

  ngOnInit() {}
}
