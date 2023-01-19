import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'localImageUrl',
})
export class LocalImageUrlPipe implements PipeTransform {
  // CONSTRUCTOR
  constructor(private readonly sanitize: DomSanitizer) {}

  // IMPLEMENTATIONS
  transform(file?: File | null): SafeUrl | null {
    if (!file) {
      return null;
    }

    console.log(file);
    

    const objectUrl = URL.createObjectURL(file);
    const byPassUrl = this.sanitize.bypassSecurityTrustUrl(objectUrl);

    return byPassUrl;
  }
}
