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

  export const flanoidsMode = (a: Alcohol[]) => {
    a = a.slice().sort((x, y) => x.flavanoids - y.flavanoids);
  
    var bestStreak = 1;
    var bestElem = a[0];
    var currentStreak = 1;
    var currentElem = a[0];
  
    for (let i = 1; i < a.length; i++) {
      if (a[i-1] !== a[i]) {
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak;
          bestElem = currentElem;
        }
  
        currentStreak = 0;
        currentElem = a[i];
      }
  
      currentStreak++;
    }
  
    return currentStreak > bestStreak ? currentElem.flavanoids : bestElem.flavanoids;
  };

  export const gammaMode = (a: Alcohol[]) => {
    a = a.slice().sort((x, y) => x.gamma - y.gamma);
  
    var bestStreak = 1;
    var bestElem = a[0];
    var currentStreak = 1;
    var currentElem = a[0];
  
    for (let i = 1; i < a.length; i++) {
      if (a[i-1] !== a[i]) {
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak;
          bestElem = currentElem;
        }
  
        currentStreak = 0;
        currentElem = a[i];
      }
  
      currentStreak++;
    }
  
    return currentStreak > bestStreak ? currentElem.gamma : bestElem.gamma;
  };

