import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';
import {ShoppingListService} from './../shopping-list/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [];
  // new Ingredient('Apples',5),
  // new Ingredient('Tomatoes',10),
  private igChangeSub: Subscription;

constructor(private slService: ShoppingListService) { }

ngOnInit() {
  this.ingredients = this.slService.getIngredients();
  this.igChangeSub = this.slService.ingredientsChanged
  .subscribe(
    (ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    }
      );
}

onEditItem(index:number ){
  this.slService.startEditing.next(index);
}
ngOnDestroy(){
  this.igChangeSub.unsubscribe();
}

// onIngredientAdded(ingredient: Ingredient){
//   this.ingredients.push(ingredient);
// }

}
