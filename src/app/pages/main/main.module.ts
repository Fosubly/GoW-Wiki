import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, LoaderComponent],
})
export class MainModule {}
