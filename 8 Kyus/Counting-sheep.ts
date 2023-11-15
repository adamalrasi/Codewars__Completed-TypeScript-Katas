/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.reduce(
    (total: number, sheep: boolean | undefined | null): number => {
      if (sheep) return total + 1;
      return total;
    },
    0
  );
}
