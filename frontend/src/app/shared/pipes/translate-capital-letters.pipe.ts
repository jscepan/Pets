import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Pipe({
  standalone: true,
  pure: false, // Ako želite da reaguje na promene dinamičkog sadržaja
  name: 'translateWithCapitalLetters',
})
export class TranslateWithCapitalLettersPipe extends TranslatePipe {
  override transform(query: string, ...args: any[]): any {
    const translation = super.transform(query, ...args);

    if (translation === query && query) {
      // Zamena '_' sa razmacima
      const stringWithSpaces = query.replace(/_/g, ' ');

      // Trimovanje početnih i krajnjih razmaka
      const trimmedString = stringWithSpaces.trim();

      // Povećanje početnog slova svake reči
      const words = trimmedString.split(' ');
      const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });

      // Spajanje reči natrag u string
      const resultString = capitalizedWords.join(' ');

      return resultString;
    }

    return translation;
  }
}
