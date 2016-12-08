import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Featured } from '../pages/featured/featured';
import { ExploreDetail } from '../pages/explore/explore-detail';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { RecipeDetails } from '../pages/recipe-details/recipe-details';
import { Explore } from '../pages/explore/explore';


import { CreateRecipe } from '../pages/create-recipe/create-recipe';
import { YourRecipes } from '../pages/your-recipes/your-recipes';
import { AuthService } from '../services/auth/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Featured;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private auth: AuthService) {
    this.initializeApp();
     platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
          // Schedule a token refresh on app start up
          auth.startupTokenRefresh();
        });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Featured', component: Featured },
      { title: 'Create Recipe', component:CreateRecipe},
      { title: 'Your Recipes', component:YourRecipes},
      { title: 'Explore', component: Explore },
      { title: 'Profile', component: Profile }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
