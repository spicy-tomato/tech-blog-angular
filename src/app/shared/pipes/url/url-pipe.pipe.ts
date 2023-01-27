import { Pipe, PipeTransform } from '@angular/core';
import { PostSummary, User } from 'src/data/models';
import { GetPostResponse } from 'src/data/responses';

@Pipe({
  name: 'url',
})
export class UrlPipe implements PipeTransform {
  transform(
    value: string | PostSummary | GetPostResponse | User,
    urlType: 'post' | 'user' | 'tag'
  ): string {
    switch (urlType) {
      case 'user':
        if (typeof value === 'string') {
          throw new Error('Value should be `PostSummary`');
        }
        if ('userName' in value) {
          return `/u/${value.userName}`;
        }
        return `/u/${value.author.userName}`;
      case 'post':
        if (typeof value === 'string' || 'userName' in value) {
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
