import { Component } from "@angular/core";
import { Product } from "src/app/interface/product";
import { PRODUCTS } from "src/assets/data/products";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  products = PRODUCTS;
  constructor() {
    console.log(this.products);
  }
}
