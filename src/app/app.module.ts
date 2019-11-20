import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsContainerComponent } from './containers/competitions-container/competitions-container.component';
import { MatchesContainerComponent } from './containers/matches-container/matches-container.component';
import { AccessTokenInterceptor } from './core/interceptors/access-token.interceptor';
import { CardListModule } from './shared/card-list/card-list.module';
import { reducers } from './store';
import { CompetitionsEffects } from './store/competition/effects';
import { MatchesEffects } from './store/matches/effects';

@NgModule({
  declarations: [AppComponent, CompetitionsContainerComponent, MatchesContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    CardListModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([CompetitionsEffects, MatchesEffects]),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
