import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { DummyComponent } from '@core/components/dummy/dummy.component';
import { LoginPageComponent } from '@modules/login/components/login-page/login-page.component';
import { LoginModule } from '@modules/login/login.module';
import { ListSpeciesComponent } from '@core/components/list-species/list-species.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DummyComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'list',
    component: ListSpeciesComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
