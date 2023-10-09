import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Language } from './shared/enums/language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  static defaultLanguage: Language = Language.Serbian;
  public supportedLanguages = [Language.English, Language.Serbian];

  public selectedLanguage: Language = Language.Serbian;

  constructor(
    private translateService: TranslateService,
    private titleService: Title
  ) {
    const lang = localStorage.getItem('languagePets');
    let selectedLanguage: Language =
      lang != null && (lang === Language.English || lang === Language.Serbian)
        ? lang
        : LanguageService.defaultLanguage;
    if (!selectedLanguage) {
      selectedLanguage = LanguageService.defaultLanguage;
    }
    this.changeLanguage(selectedLanguage);
  }

  changeLanguage(languageCode: Language | string): void {
    if (
      languageCode === Language.English ||
      languageCode === Language.Serbian
    ) {
      this.selectedLanguage = languageCode;
      this.translateService.use(languageCode);
      localStorage.setItem('languagePets', languageCode);
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
