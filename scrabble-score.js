export default function (letter) {
  if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'].includes(letter)) {
    return 1;
  }
  if (['d', 'g'].includes(letter)) {
    return 2;
  }
  if (['b', 'c', 'm', 'p'].includes(letter)) {
    return 3;
  }
  if (['f', 'h', 'v', 'w', 'y'].includes(letter)) {
    return 4;
  }
  if (['k'].includes(letter)) {
    return 5;
  }
  if (['j', 'x'].includes(letter)) {
    return 8;
  }
  if (['q', 'z'].includes(letter)) {
    return 10;
  }
}
