import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit {
  public currentLang: string = 'en';

  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.initLang();
  }

  public changeLanguage(langKey: string) {
    this.translateService.use(langKey);
  }

  private initLang(): void {
    this.currentLang = this.translateService.getDefaultLang();
    this.translateService.onLangChange.subscribe((lang) => {
      this.currentLang = lang.lang;
      console.log(lang);

      this.cdr.markForCheck();
    });
  }
}
