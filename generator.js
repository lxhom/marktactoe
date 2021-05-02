let clone = o => JSON.parse(JSON.stringify(o));
let fieldGen = () => "x".repeat(9).split("").map(() => 0);

let player = 1;
let computer = 2;

let getBestMove = (field, cache = {}) => {
  let cacheName = JSON.stringify(field)
  let cached = cache[cacheName];
  if (cached) {
     return cached
  } else {
    if (field.indexOf(0) === -1) return [null]
    let possibleMoves = [];
    let winFound;
    field.forEach((v, outerIndex) => {
      if (winFound) return;
      if (v !== 0) return;
      let outerField = clone(field)
      outerField[outerIndex] = computer;
      if (winCheck(outerField) === computer) return winFound = [outerIndex]
      let possibleLoose = false;
      outerField.forEach((v, innerIndex) => {
        let innerField = clone(outerField)
        if (possibleLoose) return;
        innerField[innerIndex] = player;
        if (v !== 0) return;
        let win = winCheck(innerField)
        if (win) {
          possibleLoose = win === player;
        } else if (getBestMove(innerField, cache).length === 0) {
          possibleLoose = true;
        }
      })
      if (!possibleLoose) {
        possibleMoves.push(outerIndex);
      }
    })
    if (winFound) possibleMoves = winFound
    return cache[cacheName] = possibleMoves;
  }
}

let winCheck = field => {
  let diag = [{}, 0, 0];
  let diagInv = [{}, 0, 0];

  for (let i of [0, 1, 2]) {
    let row = [{}, 0, 0]
    let col = [{}, 0, 0]

    for (let j of [0, 1, 2]) {
      row[field[i*3+j]]++
      col[field[i+j*3]]++
    }

    if (col.indexOf(3) !== -1) return col.indexOf(3)
    if (row.indexOf(3) !== -1) return row.indexOf(3)

    diag[field[i*4]]++;
    diagInv[field[2+2*i]]++;
  }
  if (diag.indexOf(3) !== -1) return diag.indexOf(3)
  if (diagInv.indexOf(3) !== -1) return diagInv.indexOf(3)

  return 0;
}

let renderer = (field, first = true, alreadyDone = []) => {
  let unresolved = []
  let id = field.join("")
  if (alreadyDone.includes(id)) return "";
  alreadyDone.push(id)

  let copy = field.map((n, i) => {
    if (n !== 0) return [null, "`x`", "`o`"][n]
    let innerCopy = clone(field);
    innerCopy[i] = player;
    let response = getBestMove(innerCopy)[0];
    innerCopy[response] = computer;
    if (innerCopy.indexOf(0) === -1) {
      return "<kbd>[x](#tie)</kbd>";
    }
    if (winCheck(innerCopy) === player) console.warn("SOMETHING WENT HORRIBLY WRONG. THE BOT LOST", JSON.stringify({field, innerCopy}))
    if (winCheck(innerCopy) === computer) {
      return "<kbd>[x](#you-lost)</kbd>";
    }
    unresolved.push(clone(innerCopy))
    return `<kbd>[x](#f${innerCopy.join("")})</kbd>`;
  });
  let outString = `###### f${id}\n`;
  let pointer = 0
  outString += (
      "! | ! | !\n" +
      "---|---|---\n" +
      "**!** | **!** | **!**\n" +
      "**!** | **!** | **!**\n\n" +
      "------\n\n"
  ).replace(/!/g, () => copy[pointer++])
  unresolved.forEach((arr, i, a) => {
    if (first) console.warn(`iteration ${i}/${a.length}`)
    outString += renderer(arr, false, alreadyDone)
  })
  return outString
}

console.log(renderer(fieldGen()))