function fibs(num: number) {
  const arr = [0, 1];
  for (let i = 1; i < num - 1; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr;
}

console.log(fibs(10));

function fibsRec(num: number) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  let fibs: number[] = fibsRec(num - 1);

  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

console.log(fibsRec(5));
