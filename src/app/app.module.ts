import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PippoArticoliListComponent } from './components/pippo-articoli-list/pippo-articoli-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PippoArticoloDetailComponent } from './components/pippo-articolo-detail/pippo-articolo-detail.component';
import { AutoriListComponent } from './components/autori-list/autori-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PippoArticoliListComponent,
    PippoArticoloDetailComponent,
    AutoriListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
