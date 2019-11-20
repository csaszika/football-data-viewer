import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessTokenInterceptor } from './core/interceptors/access-token.interceptor';
import { NavigationCardsModule } from './shared/navigation-cards/navigation-cards.module';
import { CompetitionsContainerComponent } from './containers/competitions-container/competitions-container.component';
import { reducers } from './store';
import { CompetitionsEffects } from './store/competition/effects';

@NgModule({
  declarations: [AppComponent, CompetitionsContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    NavigationCardsModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([CompetitionsEffects]),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
