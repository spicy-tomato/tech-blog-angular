import { Md5 } from 'ts-md5';

export class StringHelper {
  static md5(text: string): string {
    return new Md5().appendStr(text).end() as string;
  }

  static toCapitalCase(text: string): string {
    if (text === '') {
      return '';
    }

    return text
      .split(' ')
      .map((char) => char[0].toUpperCase() + char.substring(1))
      .join('');
  }
}
