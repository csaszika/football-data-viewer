import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationCardsModule } from './shared/navigation-cards/navigation-cards.module';
import { CompetitionsContainerComponent } from './shell/leagues-container/competitions-container.component';

@NgModule({
  declarations: [AppComponent, CompetitionsContainerComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, NavigationCardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
