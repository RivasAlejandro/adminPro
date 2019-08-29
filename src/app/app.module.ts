import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { APP_ROUTES } from './app.route';

import { RegisterComponent } from './register/register.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
AppComponent,
LoginComponent,
RegisterComponent
  ],
  imports: [
    SharedModule,
    PagesModule,
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
