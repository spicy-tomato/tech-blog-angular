import { Pipe, PipeTransform } from '@angular/core';
import { PostSummary } from 'src/data/models';

@Pipe({
  name: 'url',
})
export class UrlPipe implements PipeTransform {
  transform(
    value: string | PostSummary,
    urlType: 'post' | 'user' | 'tag'
  ): string {
    switch (urlType) {
      case 'user':
        if (typeof value === 'string') {
          throw new Error('Value should be `PostSummary`');
        }
        return `/u/${value.author.userName}`;
      case 'post':
        if (typeof value === 'string') {
          throw new Error('Value should be `PostSummary`');
        }
        return `/u/${value.author.userName}/${value.id}`;
      default:
        if (typeof value !== 'string') {
          throw new Error('Value should be a string');
        }
        return `/t/${value}`;
    }
  }
}
