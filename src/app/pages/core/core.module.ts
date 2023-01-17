import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@NgModule({
  declarations: [CoreComponent, HeaderComponent, LanguageSwitcherComponent],
  imports: [CommonModule, CoreRoutingModule, TranslateModule],
})
export class CoreModule {}
