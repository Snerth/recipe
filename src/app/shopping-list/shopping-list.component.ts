import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Beans", 300),
    new Ingredient("Pepper", 1),
    new Ingredient("Corn", 200),
    new Ingredient("Meat", 400),
    new Ingredient("Onion", 1),
    new Ingredient("Tomato", 6)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
