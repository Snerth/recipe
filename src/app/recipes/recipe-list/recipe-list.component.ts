import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe("Mexican Soup", "Hot chili soup that is so tasty you will cry", "https://dinnerthendessert.com/wp-content/uploads/2019/01/Taco-Soup-3.jpg"),
    new Recipe("Olivie", "One of the most delicious salads", "https://lh3.googleusercontent.com/proxy/tspLjpJSgTqmfDR2SO-N8KMyyA4yC1PUn5Es1lTorD46PhOHVPD8fubbA9sW8usOakHm7eZ8qO-6CSPkyretcz1hi_xurTIAfRS4")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe)
  }
}
