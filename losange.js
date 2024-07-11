//   #
//  ###
// #####
//  ###
//   #

let N = 3;
let C = "#";

for (let i = 1; i <= N; i++) {
  let spaces = " ".repeat(N - i);
  let stars = C.repeat(2 * i - 1);

  console.log(spaces + stars + spaces);
}

for (let i = N - 1; i >= 1; i--) {
  let spaces = " ".repeat(N - i);
  let stars = C.repeat(2 * i - 1);

  console.log(spaces + stars + spaces);
}
