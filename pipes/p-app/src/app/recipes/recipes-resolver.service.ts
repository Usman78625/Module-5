import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ReciperesolverService implements Resolve<Recipe[]>{
constructor(private dataStorageService: DataStorageService){}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorageService.fetchRecipes()
}

}