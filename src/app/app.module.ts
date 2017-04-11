import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServicesComponent } from './services/services.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ImmunizationsComponent } from './immunizations/immunizations.component';

const appRoutes = [
  { path: 'home',  component: HomeComponent },
  { path: 'account',  component: AccountComponent },
  { path: 'immunizations',  component: ImmunizationsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ServicesComponent,
    HomeComponent,
    AccountComponent,
    ImmunizationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
