import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DummyComponent } from '@core/components/dummy/dummy.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { ListSpeciesComponent } from '@core/components/list-species/list-species.component';
import { AuthInterceptorProvider } from '@core/http/auth.interceptor';
import { AuthService } from '@core/services/auth.service';
import { TrainerService } from '@core/services/trainer.service';
import { TrainerState } from '@core/state/trainer';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { DialogComponent } from './core/components/dialog/dialog.component';
import { SpeciesDetailsComponent } from './core/components/species-details/species-details.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, DialogComponent, SpeciesDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    NgxsModule.forRoot([TrainerState], {
      developmentMode: isDevMode(),
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    LayoutComponent,
    ListSpeciesComponent
  ],
  providers: [AuthInterceptorProvider, AuthService, TrainerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
