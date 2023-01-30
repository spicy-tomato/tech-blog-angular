import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailto',
})
export class MailtoPipe implements PipeTransform {
  transform(email: string): string {
    return `mailto:${email}`;
  }
}
