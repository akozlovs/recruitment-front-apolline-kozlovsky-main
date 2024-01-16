import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { DummyComponent } from '@core/components/dummy/dummy.component';
import { LoginPageComponent } from '@modules/login/components/login-page/login-page.component';
import { LoginModule } from '@modules/login/login.module';
import { ListSpeciesComponent } from '@core/components/list-species/list-species.component';
import { HomePageComponent } from '@core/components/home-page/home-page.component';
import { SpeciesDetailsComponent } from '@core/components/species-details/species-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'list',
    component: ListSpeciesComponent ,
  },
  {
    path: 'species/:id',
    component: SpeciesDetailsComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
