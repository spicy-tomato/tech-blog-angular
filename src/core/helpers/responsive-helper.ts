import { ResponsiveSize } from 'src/core/data';

export class ResponsiveHelper {
  static getResponsiveSize(width: number): ResponsiveSize {
    let res: ResponsiveSize = null;
    const arr: Record<Exclude<ResponsiveSize, null>, number> = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    };

    for (const [size, breakPoint] of Object.entries(arr)) {
      if (width >= breakPoint) {
        res = size as ResponsiveSize;
      } else {
        break;
      }
    }

    return res;
  }
}
