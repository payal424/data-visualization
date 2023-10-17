import { Alcohol } from "./Modal";

export const groupBy = function(inputArr: any[], key: string | number) {
    return inputArr.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

export function groupBy2<K, V>(array: V[], grouper: (item: V) => K) {
    return array.reduce((store, item) => {
      var key = grouper(item)
      if (!store.has(key)) {
        store.set(key, [item])
      } else {
        store.get(key)?.push(item)
      }
      return store
    }, new Map<K, V[]>())
  }

