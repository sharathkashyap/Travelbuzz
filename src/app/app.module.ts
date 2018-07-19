import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TravelbuzzModule } from './modules/travelbuzz/travelbuzz.module';
import { TtpModule } from './modules/ttp/ttp.module';
import { HomeComponent } from './modules/travelbuzz/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TravelbuzzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
