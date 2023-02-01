type Item<K extends number | string, V> = {
  id: K;
  value: V;
};

export class ObjectHelper {
  static toArray<K extends number | string, V>(
    obj: Record<K, V>,
    options?: {
      uniqueValue?: boolean;
    }
  ): Item<K, V>[] {
    const array: Item<K, V>[] = [];
    (Object.keys(obj) as K[]).forEach((key) => {
      if (options?.uniqueValue && array.find((x) => x.value === obj[key])) {
        return;
      }
      array.push({ id: key, value: obj[key] });
    });
    return array;
  }

  static isNullOrUndefined<T>(
    obj: T | null | undefined
  ): obj is null | undefined {
    return obj === null || obj === undefined;
  }
}
