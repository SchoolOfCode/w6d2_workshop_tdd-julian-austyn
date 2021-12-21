export default function scrabbleScore(word) {
  switch (word) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "l":
    case "n":
    case "r":
    case "s":
    case "t":
      return 1;
    case "d":
    case "g":
      return 2;
    case "b":
    case "c":
    case "m":
    case "p":
      return 3;
    case "f":
    case "h":
    case "v":
    case "w":
    case "y":
      return 4;
    case "k":
      return 5;
    case "j":
    case "x":
      return 8;
    case "q":
    case "z":
      return 10;
  }
}

// let total = [];
// let startLoop = 0;
// export function scrabbleTotal(word) {
//   for (startLoop = 0; startLoop < word.length; startLoop++) {
//     total = scrabbleScore[startLoop].push;
//     return total;
//   }
//}
