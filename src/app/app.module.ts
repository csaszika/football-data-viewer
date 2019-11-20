import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { LeaguesContainerComponent } from './shell/leagues-container/leagues-container.component';
import { NavigationCardsModule } from './shared/navigation-cards/navigation-cards.module';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NavigationCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
