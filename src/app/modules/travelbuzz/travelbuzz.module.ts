import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, HomeComponent, FormComponent, FiltersComponent, SliderComponent],
  providers: []
})
export class TravelbuzzModule { }
