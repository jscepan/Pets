import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  static defaultLanguage: 'en' | 'sr' = 'en';
  public supportedLanguages = ['en', 'sr'];

  public selectedLanguage: 'en' | 'sr' = 'en';

  constructor(
    private translateService: TranslateService,
    private titleService: Title
  ) {
    const lang = localStorage.getItem('language');
    let selectedLanguage: 'en' | 'sr' =
      lang != null && (lang === 'en' || lang === 'sr')
        ? lang
        : LanguageService.defaultLanguage;
    if (!selectedLanguage) {
      selectedLanguage = LanguageService.defaultLanguage;
    }
    this.changeLanguage(selectedLanguage);
  }

  changeLanguage(languageCode: 'en' | 'sr' | string): void {
    if (languageCode === 'en' || languageCode === 'sr') {
      this.selectedLanguage = languageCode;
      this.translateService.use(languageCode);
      localStorage.setItem('language', languageCode);
      this.setBrowserTitle();
    }
  }

  private setBrowserTitle(): void {
    // TODO 'browserTitle' is fixed for all pages, make this dynamic for SEO purposes
    this.translateService.get('browserTitle').subscribe((title: string) => {
      const browserTitle: string = title;
      this.titleService.setTitle(browserTitle);
    });
  }
}
