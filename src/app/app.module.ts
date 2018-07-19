import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TravelbuzzModule } from './modules/travelbuzz/travelbuzz.module';
import { TtpModule } from './modules/ttp/ttp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TravelbuzzModule,
    TtpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
